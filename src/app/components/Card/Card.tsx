import { Button } from "../Button/Button"
import styles from "./page.module.css"
export default function Card () {
    return (
        <main >
           <section className={`${styles.section}`}>
            <div className={`${styles.section_content}`}>
                <picture>
                    <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="disney logo"  width="1054px" height="569px"/>
                </picture>
                <h2>As melhores histórias em um só lugar.</h2> 
                <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                    <picture>
                        <img src="https://cnbl-cdn.bamgrid.com/assets/6d0514420af1aa17883ea433aeab05eeefb1ea60fdc9185c2c182d0c92273435/original" alt="logos" />
                    </picture>
                    <Button name="Assine agora" page="cadastrar"/>
                </li>
                <li className={`${styles.li}`}>
                    <picture>
                        <img src="https://cnbl-cdn.bamgrid.com/assets/122c74e7136e05cbb7bc4c36e05567e13b03b9db659f5a31bb70b0100aff056f/original" alt="logos" />
                    </picture>
                    <Button name="Assine agora" page="cadastrar"/>
                </li>

                </ul> 
            </div>  
            <div className={`${styles.section_background} ${styles.lg}`}>
                
            </div>
           </section>
        </main>

    )
}