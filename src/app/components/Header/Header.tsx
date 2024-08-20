"use client";
import Logo from "../Logo/Logo";
import Link from "next/link";
import Button from "@/app/components/Button/Button"
import burgerImg from "@public/burgerImg.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
    const [burgerMenu, setMenu] = useState(false);
    const openBurgerMenu = () => setMenu(!burgerMenu);
    return (
        <header>
            <div className={styles.header}>
                <Logo></Logo>
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNav__list}>
                        <li className={styles.mainNav__item}>
                            <Link href="#about" className={styles.mainNav__link}>About us</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#catalog" className={styles.mainNav__link}>Catalogy</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#feedback" className={styles.mainNav__link}>Feedback</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#forPartners" className={styles.mainNav__link}>For Partrens</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#contacts" className={styles.mainNav__link}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Button
                    className={styles.burgerMenu}
                    burgerImg={burgerImg}
                    alt="burger menu"
                    onClick={openBurgerMenu}
                    type="button"
                />
            </div>
                <MobileMenu burgerMenu={burgerMenu} openBurgerMenu={openBurgerMenu}></MobileMenu>
        </header>
    )
}
export default Header;