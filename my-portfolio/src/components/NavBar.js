import React from "react";
import { Link } from "gatsby";
import * as styles from "./navBar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li><Link to="/" className={styles.navLink}>Home</Link></li>
                <li><Link to="/about" className={styles.navLink}>About</Link></li>
                <li><Link to="/projects" className={styles.navLink}>Projects</Link></li>
                <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar