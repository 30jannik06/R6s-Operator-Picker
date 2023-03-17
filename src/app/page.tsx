"use client";

import styles from './style.module.css'
import operationHeader from '@/../public/img/season/CommandingForceLogo.png'
import elabig from '@/../public/img/op-portraits/lion.webp'
import ela from '@/../public/img/op-icons/ela.svg'
import ATKIcon from "@/../public/img/icons/swords.svg";
import DEFIcon from "@/../public/img/icons/shield.svg";
import GithubLogo from "@/../public/img/icons/github-mark-white.svg"
import {displayRandomOperator, gotoURL} from "@/app/api/script"
import Image from "next/image";
import {attackers, defenders, allOps} from "@/app/api/operator";

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
            <button id={styles.btns} className={styles.btnATK}
                    onClick={() => displayRandomOperator(attackers)}>Attacker
              <Image className={styles.ATKIcon} src={ATKIcon} alt="AtkIcon"/>
            </button>
            <button id={styles.btns} className={styles.btnDEF} onClick={() => displayRandomOperator(defenders)}>
              <Image className={styles.DEFIcon} src={DEFIcon} alt="DefICON"/>
              Defender
            </button>
          </div>
        </a>
        <a className={styles.github}>
          <Image className={styles.githubIcon} onClick={()=>gotoURL("https://github.com/30jannik06/R6s-Operator-Picker")}  src={GithubLogo} alt="operationheader"></Image>
        </a>
      </main>
  )
}
