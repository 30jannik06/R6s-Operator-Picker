import styles from './style.module.css'
import operationHeader from '../../public/season/Commanding Force logo.png'
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <a className={styles.header}>
                <Image src={operationHeader} alt="operationheader"></Image>
            </a>
            <a className={styles.operator}></a>
            <a className={styles.operatorIconName}></a>
            <a className={styles.selection}></a>
            <a className={styles.github}></a>
        </main>
    )
}
