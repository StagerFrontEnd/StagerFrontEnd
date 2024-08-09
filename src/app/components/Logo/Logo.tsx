import Image from 'next/image';
import logoImg from "@public/logo_toy_house.png"
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <Image 
        className={styles.logo}
        src={logoImg}
        alt='Logo'
        />
    )
}

export default Logo;