import Image from "next/image";

import styles from "./FeedBack.module.scss";
import feedBackAva1 from "@public/burgerImg.png"
import ratigStar from "@public/rating_star.png"

const FeedBack = () => {
    return (
        <section className={styles.feedBack}>
            <h2 className={styles.feedBack__heading}>feedback</h2>
            <div className={styles.feedBack__container}>
                <div className={styles.feedBackSlider}>
                    <article className={styles.feedBackSlider__slide}>
                        <div className={styles.feedBackSlider__head}>
                            <Image src={feedBackAva1} alt="---" width={40} height={40} />
                            <div className={styles.feedBackSlider__info}>
                                <span className={styles.feedBackSlider__name}>Name</span>
                                <span className={styles.feedBackSlider__date}>01.01.2001</span>
                                <span className={styles.feedBackSlider__rating}>
                                    <Image src={ratigStar} alt="rating star" width={35} height={33} />
                                </span>
                            </div>
                        </div>
                        <p className="styles feedBackSlider__body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default FeedBack;