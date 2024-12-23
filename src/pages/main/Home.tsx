import { useEffect, useState } from "react";
import BigForm from "../../components/big_form/BigForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Statistics from "../../components/statistics/Statistics";
import styles from "./Home.module.scss";
import SmallForm from "../../components/small_form/SmallForm";

export default function Main() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

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
      name: 'АО "ДПД РУС"',
      text: "Мы сотрудничаем с компанией ООО «Скайлайн аир карго» в области транспортной логистики. Качество предоставляемых транспортно-экспедиционных услуг характеризуется высоким уровнем профессионализма: комплексностью, своевременностью, оперативностью, индивидуальным и партнерским подходом в решении всех возникавших вопросов. Все это обеспечивает максимально комфортное взаимодействие. Мы готовы рекомендовать ООО «Скайлайн анр карго» как надежного стратегического партнера, выполняющего свои обязательства в соответствии с высокими профессиональными стандартами.",
      img: "../src/assets/img/otziv1.png"
    },
    {
      id: 2,
      rating: 5,
      name: 'ООО "Вайлдберриз"',
      text: "ООО «Вайлдберриз» сообщает, что Общество с ограниченной ответственностью «Скайлайн анр карго», является нашим деловым партнером, своевременно и в полном объеме исполияет свои обязательства по договорам, а также соблюдает все устные и нисьменные договоренности. Мы высоко оцепиваем его деловую репутацию как ценного и ответственного партнера, и планируем дальнейшес сотрудничество с ним.",
      img: "../src/assets/img/otziv2.png"
    },
    {
      id: 3,
      rating: 5,
      name: 'ООО "Русский свет"',
      text: "Настоящим нисьмом выражаем Вам свою признательность и благодарность за сотрудничество с нашей комнанией в сфере международных перевозок. За весь период сотрудничества компания ООО «Скайлайн аир карго» зарекомендовала себя как стабильный и ответственный партнер, веегда обеспечивая гибкий подход к пашим потребностям, высокую оперативность и максимальную падежность перевозок. Особо следует подчеркпуть тот факт, что отличительной чертой работы компании «Скайлайн аир карго» являстся оперативность и высокая организованность сотрудников компании, что наряду с готовностью быстро реагировать на возникающие обстоятельства позволяет решать самые нестандартные ситуации.",
      img: "../src/assets/img/otziv3.png"
    }
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.main_content}>
          <img src="/src/assets/logo/logo_4x.png" alt="" width="300px" />
          <p>
          Skyline Air Cargo – команда профессионалов, предоставляющая 
          полный спектр услуг по грузоперевозкам собственным транспортом. 
          Мы обеспечиваем надёжную и эффективную доставку грузов любого объёма 
          и типа, независимо от сложности маршрута. 
          Будем рады начать долгосрочное сотрудничество с новыми партнерами.
          </p>
        </div>
        {width > 800 ? (
          <BigForm />
        ) : (
          <div className={styles.mobile_cont}>
            <SmallForm />
            <img src="/src/assets/img/gruz1.png" alt="" width="300px" />
          </div>
        )}
        
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
        <img src="/src/assets/img/wb.svg" alt="Wildberries" className={styles.wb_img} />
        <img src="/src/assets/img/dpd.svg" alt="Dpd" className={styles.dpd_img} />
        <img src="/src/assets/img/rs.svg" alt="Русский свет" className={styles.rs_img} />
      </div>
      <div className={styles.reviews}>
        <h1>ОТЗЫВЫ</h1>
        <div className={styles.reviews_container}>
          {reviews.map((item) => (
            <div className={styles.reviews_item} key={item.id}>
              <div className={styles.nr_box}>
                <div className={styles.nr_container}>
                  <p>{item.name}</p>
                    <div className={styles.rating}>
                        {[...Array(item.rating)].map((_, i) => (
                        <img key={i} src="/src/assets/img/star.svg" alt="Звезда рейтинга" />
                    ))}
                </div>
              </div>
              <p>{item.text}</p>
            </div>
            <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Statistics />
      <Footer />
    </main>
  )
}
