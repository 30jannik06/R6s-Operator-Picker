"use client"
import Image from 'next/image'
import styles from './page.module.css'
import headerImage from "@/img/season/CommandingForceLogo.png"
import attackerPortrait from "@/img/op-portraits/attacker/blitz.webp";
import defenderPortrait from "@/img/op-portraits/defender/alibi.webp";
import attackerIcon from "@/img/op-icons/attacker/blitz.svg";
import defenderIcon from "@/img/op-icons/defender/alibi.svg";
import {useState} from "react";

export default function Home() {
    const [portrait, setPortrait] = useState(attackerPortrait);
    const [icon, setIcon] = useState(attackerIcon);

    const handleButtonClick = (type: string) => {
        if (type === 'attacker') {
            setPortrait(attackerPortrait);
            setIcon(attackerIcon);
        } else if (type === 'defender') {
            setPortrait(defenderPortrait);
            setIcon(defenderIcon);
        }
    };
    return (
        <main className={styles.main}>
            <Image src={headerImage} className={styles.headerImg} alt='' draggable={"false"}
                   contextMenu={"false"}></Image>
            <div className={styles.opPictureBase}>
                <Image src={portrait} alt="" className={styles.oportraitImg} draggable={"false"}
                       contextMenu={"false"}></Image>
                <Image src={icon} alt="" className={styles.opiconImg} draggable={"false"}
                       contextMenu={"false"}></Image>
            </div>
            <div className={styles.buttonsBase}>
                <div className={styles.buttons} style={{backgroundColor: "#ff0000"}}
                     onClick={() => handleButtonClick("attacker")}>Attacker
                </div>
                <div className={styles.buttons} style={{backgroundColor: "#008000"}}
                     onClick={() => handleButtonClick("defender")}>Defender
                </div>
            </div>
        </main>
    )
}
