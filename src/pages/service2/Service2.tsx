import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallForm from "../../components/small_form/SmallForm";
import Statistics from "../../components/statistics/Statistics";
import styles from "./Service2.module.scss";

export default function Service2() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>Ежедневная доставка крупногабаритного товара.</h1>
          <div className={styles.content_2}>
            <p>
              Собственные фуры грузоподъёмностью до 20тн готовы на 
              <br/>ежедневной основе закрывать Ваши маршруты.
              <br/>Согласовываем удобный для Вас график отгрузок и 
              <br/>маршрут, заключаем договор, предоставляем транспорт и 
              <br/>водителя. Прозрачная система работы и оплаты. Будьте 
              <br/>уверены, что Ваш груз в надеждных руках.
            </p>
            <SmallForm />
          </div>
          <img src="../src/assets/img/big_car.png" alt="" />
        </div>
        <Statistics />
        <Footer />
    </main>
  )
}