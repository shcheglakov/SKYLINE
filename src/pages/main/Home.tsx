import { useEffect, useState } from "react";
import BigForm from "../../components/big_form/BigForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Statistics from "../../components/statistics/Statistics";
import styles from "./Home.module.scss";
import SmallForm from "../../components/small_form/SmallForm";
import logo_4x from "/src/assets/logo/logo_4x.png"
import gruz1 from "/src/assets/img/gruz1.png"
import wb from "/src/assets/img/wb.svg"
import dpd from "/src/assets/img/dpd.svg"
import rs from "/src/assets/img/rs.svg"
import star from "/src/assets/img/star.svg"
import otziv1 from "/src/assets/img/otziv1.png"
import otziv2 from "/src/assets/img/otziv2.png"
import otziv3 from "/src/assets/img/otziv3.png"

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
      dest: "Наш приоритет — высокое качество выполняемой работы. У нас новые автомобили, надёжные водители и профессиональная команда",
    },
    {
      id: 2,
      id_color: "#F39200",
      title: "Отвественность",
      dest: "Мы несём ответственность за выполняемые заказы и всегда учитываем мнение наших партнёров.",
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
      text: "Мы сотрудничаем с компанией ООО «Скайлайн Айр Карго» в области транспортной логистики. Качество предоставляемых транспортно-экспедиционных услуг характеризуется высоким уровнем профессионализма: комплексностью, своевременностью, оперативностью, индивидуальным и партнёрским подходом в решении всех возникавших вопросов. Всё это обеспечивает максимально комфортное взаимодействие. Мы готовы рекомендовать ООО «Скайлайн Айр Карго» как надёжного стратегического партнёра, выполняющего свои обязательства в соответствии с высокими профессиональными стандартами.",
      img: otziv1
    },
    {
      id: 2,
      rating: 5,
      name: 'ООО "Вайлдберриз"',
      text: "ООО «Вайлдберриз» сообщает, что Общество с ограниченной ответственностью «Скайлайн Айр Карго» является нашим деловым партнёром, своевременно и в полном объёме исполняет свои обязательства по договорам, а также соблюдает все устные и письменные договорённости. Мы высоко оцениваем его деловую репутацию как ценного и ответственного партнёра и планируем дальнейшее сотрудничество с ним.",
      img: otziv2
    },
    {
      id: 3,
      rating: 5,
      name: 'ООО "Русский свет"',
      text: "Настоящим письмом выражаем вам свою признательность и благодарность за сотрудничество с нашей компанией в сфере международных перевозок. За весь период сотрудничества компания ООО «Скайлайн Айр Карго» зарекомендовала себя как стабильный и ответственный партнёр, всегда обеспечивая гибкий подход к нашим потребностям, высокую оперативность и максимальную надёжность перевозок. Особо следует подчеркпуть тот факт, что отличительной чертой работы компании «Скайлайн аир карго» являстся оперативность и высокая организованность сотрудников компании, что наряду с готовностью быстро реагировать на возникающие обстоятельства позволяет решать самые нестандартные ситуации.",
      img: otziv3
    }
  ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.main_content}>
          <img src={logo_4x} alt="" width="300px" />
          <p>Skyline Air Cargo – команда профессионалов, предоставляющая полный спектр услуг по грузоперевозкам <strong>собственным</strong> транспортом. Мы обеспечиваем надёжную и эффективную доставку грузов любого объёма и типа, независимо от сложности маршрута. Будем рады начать долгосрочное сотрудничество с новыми партнерами.</p>
        </div>
        {width > 800 ? (
          <BigForm />
        ) : (
          <div className={styles.mobile_cont}>
            <SmallForm />
            <img src={gruz1} alt="" width="300px" />
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
        <img src={wb} alt="Wildberries" className={styles.wb_img} />
        <img src={dpd} alt="Dpd" className={styles.dpd_img} />
        <img src={rs} alt="Русский свет" className={styles.rs_img} />
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
                        <img key={i} src={star} alt="Звезда рейтинга" />
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
