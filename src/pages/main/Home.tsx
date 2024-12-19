import BigForm from "../../components/big_form/BigForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Statistics from "../../components/statistics/Statistics";
import styles from "./Home.module.scss";

export default function Main() {
  const items = [
    {
      id: 1,
      id_color: "#000000",
      title: "Качество",
      dest: "Наш приоритет это высокое качество выполняемой работы. Новые автомобили, надёжные водители, профессиональная команда.",
    },
    {
      id: 2,
      id_color: "#F39200",
      title: "Отвественность",
      dest: "Мы несём ответственность за выполняемые заказы и всегда слышим наших партнеров.",
    },
    {
      id: 3,
      id_color: "#000000",
      title: "Компетентность",
      dest: "Наша компания долгое время выполняет заказы различной сложности и выработала чёткую систему работы.",
    }
  ];

  const reviews = [
    {
      id: 1,
      rating: 5,
      name: "Иван А.И",
      text: "*************************************",
    },
    {
      id: 2,
      rating: 5,
      name: "Иван А.И",
      text: "*************************************",
    },
    {
      id: 3,
      rating: 5,
      name: "Иван А.И",
      text: "*************************************",
    }
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.main_content}>
          <img src="../src/assets/logo/logo_4x.png" alt="" width="300px" />
          <p>
          Skyline Air Cargo – команда профессионалов, предоставляющая 
          полный спектр услуг по грузоперевозкам собственным транспортом. 
          Мы обеспечиваем надёжную и эффективную доставку грузов любого объёма 
          и типа, независимо от сложности маршрута. 
          Будем рады начать долгосрочное сотрудничество с новыми партнерами.
          </p>
        </div>
        <BigForm />
      </div>
      <div className={styles.block_why}>
        <div className={styles.text_cont}>
          <h1>Почему выбирают<br/>именно нас?</h1>
          <span></span>
        </div>
        <div className={styles.items_cont}>
          {items.map((item) => (
            <div className={styles.item} key={item.id}>
              <h1 style={{color: item.id_color}}>{item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.dest}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.partners}> 
        <img src="../src/assets/img/wb.svg" alt="" />
        <img src="../src/assets/img/dpd.svg" alt="" />
        <img src="../src/assets/img/rs.svg" alt="" />
      </div>
      <div className={styles.reviews}>
        <h1>ОТЗЫВЫ</h1>
        <div className={styles.reviews_conatiner}>
          {reviews.map((item) => (
            <div className={styles.reviews_item} key={item.id}>
              <div className={styles.nr_container}>
                <p>{item.name}</p>
                <div className={styles.rating}>
                  {[...Array(item.rating)].map((_, i) => (
                    <img key={i} src="../src/assets/img/star.svg" alt="Звезда рейтинга" />
                  ))}
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Statistics />
      <Footer />
    </main>
  )
}
