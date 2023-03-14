import styles from './style.module.css'
import operationHeader from '../../public/img/season/CommandingForceLogo.png'
import elabig from '../../public/img/op-portraits/lion.webp'
import ela from '../../public/img/op-icons/ela.svg'
import ATKIcon from "../../public/img/icons/swords.svg";
import DEFIcon from "../../public/img/icons/shield.svg";
import {displayRandomOperator} from "@/pages/api/scripts";
import {attackers, defenders, allOps} from "@/pages/api/operator";
import Image from "next/image";


export default function Home() {
    return (
        <main className={styles.main}>
            <Image className={styles.header} src={operationHeader} alt="operationheader"></Image>
            <a className={styles.operator}>
                <Image className={styles.operatorPortait} src={elabig} alt="ela"></Image>
            </a>
            <a className={styles.operatorIconName}>
                <Image className={styles.operatorIcon} src={ela} alt="ela"></Image>
                <a className={styles.operatorName}>ELA</a>
            </a>
            <a className={styles.selection}>
                <a className={styles.selectionTitle}>SELECT YOUR ROLE</a>
                <div className={styles.selectionBtns}>
                    <button id={styles.btns} className={styles.btnATK} >Attacker
                        <Image className={styles.ATKIcon} src={ATKIcon} alt="Attack Icon"/></button>
                    <button id={styles.btns} className={styles.btnDEF}><Image className={styles.DEFIcon} src={DEFIcon}
                                                                              alt="Defend ICON"/>Defender
                    </button>
                </div>
            </a>
            <a className={styles.github}></a>
        </main>
    )
}
