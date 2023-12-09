import { Button } from "../Button/Button";
import styles from "./page.module.css"
import Image from "next/image";
export default function Headers (){
    return (
   <header className={styles.header}>
        {/* <nav className={styles.nav}>
            <ul className={styles.ul}> 
                <li className={styles.li}>
                <Button name="Entrar" page="login"></Button></li>
            </ul>
        </nav>   */}
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="logo"/>
                </li>
                <li className={styles.li}>
                <Button name="Assine agora" page="cadastre"></Button></li>
                <li className={styles.li}>
                <Button name="Entrar" page="login"></Button></li>
            </ul>
        </nav>  
    </header>
    )
}
        