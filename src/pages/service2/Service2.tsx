import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallForm from "../../components/small_form/SmallForm";
// import Statistics from "../../components/statistics/Statistics";
import styles from "./Service2.module.scss";
import big_car from "/src/assets/img/big_car.png"
export default function Service2() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>Ежедневная доставка крупногабаритного товара.</h1>
          <div className={styles.content_2}>
            <p>
            Наши собственные фуры грузоподъёмностью до 20 тонн готовы на ежедневной основе обслуживать ваши маршруты. Согласовываем удобный для вас график отгрузки и маршрут, заключаем договор, предоставляем транспорт и водителя. Прозрачная система работы и оплаты. Вы можете быть уверены, что ваш груз в надёжных руках.
            </p>
            <SmallForm />
          </div>
          <img src={big_car} alt="" />
        </div>
        <Footer />
    </main>
  )
}
