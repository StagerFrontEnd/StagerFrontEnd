import styles from "./Catalogy.module.scss";
import CatalogySlider from "./CatalogySlider/CatalogySlider";

const Catalogy = () => {
    return (
        <section className={styles.catalogy}>
            <h2 className={styles.catalogy__heading}>catalogy</h2>
            <CatalogySlider />
        </section>
    )
}

export default Catalogy;