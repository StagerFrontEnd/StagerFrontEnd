"use client";
import { useState } from "react";
import Image from "next/image";
import feedBackAva1 from "@public/comment_ava.png";
import ratigStar from "@public/rating_star.png";
import ratigStarOK from "@public/rating_star_ok.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FeedBackSlides.module.scss";

const FeedBackSlide = (data: any) => {
    const dataArr = data.data[0];
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        className: `${styles.feedBackSlider__wrapper}`,
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        swipe: true,
        arrows: false,
        pauseOnHover: false,
        speed: 2000, //швидкість зміни слайду
        autoplay: true,
        autoplaySpeed: 8000,// час показу слайду
        beforeChange: (current: number, next: number) => {
            setActiveSlide(next); // Оновлюємо активний слайд при зміні
        },
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    centerPadding: "330px",
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: "240px",
                }
            },
            {
                breakpoint: 970,
                settings: {
                    centerPadding: "150px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "140px",
                }
            },
            {
                breakpoint: 670,
                settings: {
                    centerPadding: "100px",
                }
            },
            {
                breakpoint: 570,
                settings: {
                    centerPadding: "74px",
                }
            },
            {
                breakpoint: 520,
                settings: {
                    centerPadding: "54px",
                }
            },
            {
                breakpoint: 472,
                settings: {
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 375,
                settings: {
                    centerPadding: "40px",
                }
            },
        ]
    };

    return (
            <Slider {...settings}>
                {[...dataArr].map((slide: any, index: number) => (
                    <article
                        key={index}
                        className={`${styles.feedBackSlider__slide} ${
                            index === activeSlide ? styles["feedBackSlider__slide--active"] : ""
                        }`} // Динамічно додаємо клас --active
                    >
                        <div className={styles.feedBackSlider__head}>
                            <Image className={styles.feedBackSlider__avatar} src={feedBackAva1} alt="comment avatar" />
                            <div className={styles.feedBackSlider__info}>
                                <span className={styles.feedBackSlider__name}>{slide.author}</span>
                                <span className={styles.feedBackSlider__date}>{slide.data}</span>
                                <span className={styles.feedBackSlider__rating}>
                                    <Image src={ratigStarOK} alt="rating star" />
                                    <Image src={ratigStarOK} alt="rating star" />
                                    <Image src={ratigStarOK} alt="rating star" />
                                    <Image src={ratigStarOK} alt="rating star" />
                                    <Image src={ratigStar} alt="rating star" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.feedBackSlider__body}>
                            <p className={styles.feedBackSlider__text}>{slide.comment}</p>
                        </div>
                    </article>
                ))}
            </Slider>
    );
};

export default FeedBackSlide;