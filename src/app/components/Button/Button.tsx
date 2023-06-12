import Link from "next/link"
import styles from "./page.module.css"
export const Button = ({name, page}:IButton) => {
    return (
        <Link className={` ${styles.button}`} href={`/${page}`}>
            <span>{name}</span>
        </Link>
    )
}