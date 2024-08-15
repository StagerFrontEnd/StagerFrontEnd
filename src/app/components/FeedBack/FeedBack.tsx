import FeedBackSlider from "./FeedBackSlider/FeedBackSlider";
import styles from "./FeedBack.module.scss";

const FeedBack = () => {
    return (
        <section className={styles.feedBack}>
            <h2 className={styles.feedBack__heading}>feedback</h2>
            <FeedBackSlider />
        </section>
    )
}

export default FeedBack;