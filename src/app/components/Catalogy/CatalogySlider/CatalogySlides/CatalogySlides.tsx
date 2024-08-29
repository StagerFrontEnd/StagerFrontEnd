"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./CatalogySlides.module.scss";
import ratigStar from "@public/rating_star.png";
import ratigStarOK from "@public/rating_star_ok.png";
import Button from "@/app/components/Button/Button";
import { addToCart, addAmountProduct, delAmountProduct } from "@/app/utils/buttons";

const CatalogySlides = (data: any) => {
  const [currentProduct, setCurrentProduct] = useState(data.data[0][0]); // Початково зберігаємо перший товар
  const dataArr = data.data[0];

  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
    const nextSlideIndex = (data.data[0].indexOf(currentProduct) + 1) % data.data[0].length; // Знаходимо індекс наступного слайда
    setCurrentProduct(data.data[0][nextSlideIndex]); // Оновлюємо стан з новим об'єктом товару
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
    const prevSlideIndex = (data.data[0].indexOf(currentProduct) - 1 + data.data[0].length) % data.data[0].length; // Знаходимо індекс попереднього слайда
    setCurrentProduct(data.data[0][prevSlideIndex]); // Оновлюємо стан з новим об'єктом товару
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    easing: "ease-in-out",
    arrows: false
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
    <>
      <div className={styles.catalogySlides}>
        <Slider ref={sliderRef} {...settings}>
          {dataArr.map((slide: any, index: number) => (
            <article key={index} id={slide.id} className={styles.catalogySlides__slide}>
              <div className={styles.catalogySlides__img}>
                <Image src={`/products/${slide.imgSrc}`} alt={slide.name} width={200} height={100} />
              </div>
              <div className={styles.catalogySlides__info}>
                <div className={styles.catalogySlides__infoBox}>
                  <span className={styles.catalogySlides__title}>{slide.name}</span>
                  <span className={styles.catalogySlides__descr}>{slide.descr}</span>
                </div>
                <div className={styles.catalogySlides__infoBox}>
                  <div className={styles.catalogySlides__rating}>
                    {addRating(slide.rating)}
                  </div>
                  <span className={styles.catalogySlides__price}>
                    {slide.price}
                  </span>
                  <div className={styles.ammount}>
                    <Button type="button" text="-" onClick={() => addAmountProduct(currentProduct)} className={styles.ammount__delButton} />
                    <span className={styles.ammount__number}>3</span>
                    <Button type="button" text="+" onClick={() => delAmountProduct(currentProduct)} className={styles.ammount__addButton} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
      <Button className={styles.catalogySlides__button} onClick={() => addToCart(currentProduct)} type="button" text="buy now" />
      <div className={styles.catalogySlides__controls}>
        <button className={styles.catalogySlides__prevButton} onClick={previous}>
        </button>
        <button className={styles.catalogySlides__nextButton} onClick={next}>
        </button>
      </div>
    </>
  )
}

export default CatalogySlides;
