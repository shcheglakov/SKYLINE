import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SmallForm from "../../components/small_form/SmallForm";
import styles from './Service1.module.scss';
import gruz1 from "/src/assets/img/gruz1.png"
import { motion } from "framer-motion";

export default function Service1() {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.div
        className={styles.content}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ежедневная доставка товаров малотоннажным транспортом.
        </motion.h1>
        <motion.div
          className={styles.content_2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.p
           initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            В нашем автопарке собрано большое количество новых машин
            грузоподъёмностью до 3 тонн. Мы специалисты в области ежедневных
            грузоперевозок. Согласовываем удобный для вас график отгрузки и
            маршрут, заключаем договор, предоставляем транспорт и водителя.
            Прозрачная система работы и оплаты. Вы можете быть уверены, что ваш
            груз в надёжных руках.
          </motion.p>
           <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <SmallForm />
            </motion.div>
        </motion.div>
        <motion.img
          src={gruz1}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </motion.div>
      <Footer />
    </motion.main>
  );
}