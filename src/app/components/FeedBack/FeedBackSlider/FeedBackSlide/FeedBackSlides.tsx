"use client";
import Image from "next/image";
import feedBackAva1 from "@public/comment_ava.png";
import ratigStar from "@public/rating_star.png";
import ratigStarOK from "@public/rating_star_ok.png";
import styles from "./FeedBackSlides.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeedBackSlide = (data: any) => {
    const dataArr = data.data[0];

    const settings = {
        className: `${styles.feedBackSlider__wrapper}`,
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        swipe: true,
        arrows: false,
        pauseOnHover: false,
        speed: 1000, //швидкість зміни слайду
        // autoplay: true,
        autoplaySpeed: 5000,// швидкість показу слайду
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: "400px",
                }
            },
            {
                breakpoint: 970,
                settings: {
                    centerPadding: "500px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "500px",
                }
            },
            {
                breakpoint: 670,
                settings: {
                    centerPadding: "560px",
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         centerPadding: "600px",
            //     }
            // },
        ]
    };

    return (
        <div className={styles.feedBackSlider__wrapper}>
            <Slider {...settings}>
                {[...dataArr].map((slide: any, index: number) => (
                    <article
                        key={index}
                        className={styles.feedBackSlider__slide}
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
        </div>
    );
};

export default FeedBackSlide;