import AboutUs from "./components/AboutUs/AboutUs";
import OrderCall from "./components/OrderCall/OrderCall";
import SpecialsConditions from "./components/SpecialsConditions/SpecialConditions";
import styles from "./page.module.scss";



export default function Home() {
  return (
    <main className={styles.main}>
      <AboutUs />
      <SpecialsConditions />
      <OrderCall />
    </main>
  );
}