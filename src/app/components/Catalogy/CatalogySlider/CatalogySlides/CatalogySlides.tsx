"use client";

import Image from "next/image";
import Slider from "react-slick";
import styles from "./CatalogySlides.module.scss";
import ratigStar from "@public/rating_star.png";
import ratigStarOK from "@public/rating_star_ok.png";

const CatalogySlides = (data: any) => {
  const dataArr = data.data[0];
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    easing: "ease-in-out"
  };


  const addRating = (rating: number) => {
    let ratingJxs = [];
    if (rating > 0) {
      for (let i = 0; i < rating; i++) {
        ratingJxs.push(<Image key={`starOk${i}`} src={ratigStarOK} alt="rating star" />)
      }
    }
    if (rating < 5) {
      for (let i = 5; i > rating; i--) {
        ratingJxs.push(<Image key={`star${i}`} src={ratigStar} alt="rating star" />)
      }
    }
    return (ratingJxs)
  }

  return (
    <div className={styles.catalogySlides}>
      <Slider {...settings}>
        {dataArr.map((slide: any, index: number) => (
          
          <article key={index} id={slide.id} className={styles.catalogySlides__slide}>
            <div className={styles.catalogySlides__img}>
              <Image src={`/products/${slide.imgSrc}`} alt={slide.name} width={200} height={100} />
            </div>
            <div className={styles.catalogySlides__info}>
              <div className={styles.catalogySlides__infoBox}>{slide.descr}</div>
              <div className={styles.catalogySlides__infoBox}>
                <div className={styles.catalogySlides__rating}>
                  {addRating(slide.rating)}
                </div>
                <div className={styles.catalogySlides__review}>
                  {`(${slide.reviews})Reviews${slide.id}`}
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </div>
  )
}

export default CatalogySlides;