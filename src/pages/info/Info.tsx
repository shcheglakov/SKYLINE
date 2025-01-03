import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Statistics from "../../components/statistics/Statistics";
import styles from './Info.module.scss';

import logo_4x from "/src/assets/logo/logo_4x.png"

export default function Info() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <img src={logo_4x} alt="" />
          <p>Skyline Air Cargo – это динамично развивающаяся компания, предоставляющая полный спектр услуг по грузоперевозкам, как малотоннажными, так и многотоннажными транспортными средствами. Мы обеспечиваем надежную и эффективную доставку грузов любого объема и типа, независимо от сложности маршрута.</p>
          <p>Мы надежный Партнер в мире грузоперевозок!</p>
        </div>
        <Statistics />
        <Footer />
    </main>
  )
}
