import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallForm from "../../components/small_form/SmallForm";
import styles from './Service1.module.scss';
import gruz1 from "/src/assets/img/gruz1.png"
export default function Service1() {
  return (
    <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h1>Ежедневная доставка товаров малотоннажным транспортом.</h1>
          <div className={styles.content_2}>
            <p>В нашем автопарке собрано большое количество
              новых машин грузоподъёмностью до 3тн.
              Мы специалисты в области ежедневной доставки. 
              Согласовываем удобный для Вас график отгрузок и 
              маршрут, заключаем договор, предоставляем 
              транспорт и водителя. Прозрачная система работы и
              оплаты. Будьте уверены, что Ваш груз в надеждных руках.</p>
            <SmallForm />
          </div>
          <img src={gruz1} alt="" />
        </div>
        <Footer />
    </main>
  )
}
