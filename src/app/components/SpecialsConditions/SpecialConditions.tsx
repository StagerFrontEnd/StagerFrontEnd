"use client";

import Image from "next/image";
import MainImg1 from "@public/specials_conditions_top_right.png";
import MainImg2 from "@public/specials_conditions_bottom_left.png";
import MainImg3 from "@public/specials_conditions_tab.png";
import SCIcon1 from "@public/specials_conditions_firstIcon.png";
import SCIcon2 from "@public/specials_conditions_secondIcon.png";
import SCIcon3 from "@public/specials_conditions_thirdIcon.png";
import SCIcon4 from "@public/specials_conditions_foursIcon.png";
import styles from "./SpecialsConditions.module.scss";
import { useState, useEffect } from 'react';

const SpecialsConditions = () => {
    const [strokeWidth, setStrokeWidth] = useState(2);
    const updateStrokeWidth = () => {
        const width = window.innerWidth;
        if (width < 550) {
            setStrokeWidth(1);
        } else if (width < 1365) {
            setStrokeWidth(2);
        } else {
            setStrokeWidth(3);
        }
    };
    useEffect(() => {
        updateStrokeWidth();
        window.addEventListener('resize', updateStrokeWidth);
        return () => {
            window.removeEventListener('resize', updateStrokeWidth);
        };
    }, []);

    return (
        <div className={styles.specialConditions}>
            <div className={styles.specialConditions__heading}>Special conditions for <br /> partners </div>
            <div className={styles.specialConditions__container}>
                <Image src={MainImg1} alt="img 1"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__topRight}`} />
                <Image src={MainImg2} alt="img 2"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__bottomLeft}`} />
                <Image src={MainImg3} alt="img 3"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__tab}`} />
                <div className={styles.specialConditions__svg1}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="20%" y1="22%" x2="47%" y2="32%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="50%" y1="35%" x2="46%" y2="73.5%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="50%" y1="84%" x2="96%" y2="74%"></line>
                    </svg>
                </div>
                <div className={styles.specialConditions__svg2}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" y1="8%" x1="52%" x2="92%" y2="14%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" y1="30%" x1="84%" y2="43.5%" x2="52.5%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" y2="74%" y1="48%" x1="51%" x2="83%"></line>
                    </svg>
                </div>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__first}`}>
                    Our manager will contact you and talk about the terms of cooperation
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__second}`}>
                    You call or leave a request on the website
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__third}`}>
                    We discuss all the conditions and you become our new partner
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__fours}`}>
                    We provide you with a catalog of our product positions
                </p>
                <Image
                    src={SCIcon1}
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__first}`}
                    alt="sc icon 1" />
                <Image
                    src={SCIcon2}
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__second}`}
                    alt="sc icon 2" />
                <Image
                    src={SCIcon3}
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__third}`}
                    alt="sc icon 3" />
                <Image
                    src={SCIcon4}
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__fours}`}
                    alt="sc icon 4" />
            </div>
        </div>
    )
}

export default SpecialsConditions;