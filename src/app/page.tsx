import AboutUs from "./components/AboutUs/AboutUs";
import Catalogy from "./components/Catalogy/Catalogy";
import FeedBack from "./components/FeedBack/FeedBack";
import NewGoods from "./components/NewGoods/NewGoods";
import OrderCall from "./components/OrderCall/OrderCall";
import SpecialsConditions from "./components/SpecialsConditions/SpecialConditions";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <NewGoods/>
      <AboutUs />
      <Catalogy />
      <FeedBack />
      <SpecialsConditions />
      <OrderCall />
    </main>
  );
}