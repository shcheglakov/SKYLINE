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
            <p>В нашем автопарке собрано большое количество новых машин грузоподъёмностью до 3 тонн. Мы специалисты в области ежедневных грузоперевозок. Согласовываем удобный для вас график отгрузки и маршрут, заключаем договор, предоставляем транспорт и водителя. Прозрачная система работы и оплаты. Вы можете быть уверены, что ваш груз в надёжных руках.</p>
            <SmallForm />
          </div>
          <img src={gruz1} alt="" />
        </div>
        <Footer />
    </main>
  )
}
