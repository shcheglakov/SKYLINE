import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallForm from "../../components/small_form/SmallForm";
import Statistics from "../../components/statistics/Statistics";
import styles from './Service1.module.scss';

export default function Service1() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>Ежедневная доставка товаров малотоннажным транспортом.</h1>
          <div className={styles.content_2}>
            <p>В нашем автопарке собрано большое количество
              <br/> новых машин грузоподъёмностью до 3тн.
              <br/> Мы специалисты в области ежедневной доставки. 
              <br/> Согласовываем удобный для Вас график отгрузок и 
              <br/> маршрут, заключаем договор, предоставляем 
              <br/> транспорт и водителя. Прозрачная система работы и
              <br/> оплаты. Будьте уверены, что Ваш груз в надеждных руках.</p>
            <SmallForm />
          </div>
          <img src="../src/assets/img/mal_car.png" alt="" />
        </div>
        <Statistics />
        <Footer />
    </main>
  )
}
