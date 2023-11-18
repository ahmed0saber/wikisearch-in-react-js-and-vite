import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <Link to={"/"}>
                <span className={styles.logo}>WikiSearch</span>
            </Link>
            <nav>
                <Link to={"/favourites"}>Favourites</Link>
            </nav>
        </header>
    )
}
