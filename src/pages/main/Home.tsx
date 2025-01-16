import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
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
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
  }, [controls, inView]);

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
      dest: "Наша компания долгое время выполняет заказы различной сложности и создала чёткую систему работы.",
    }
  ];

  const reviews = [
    {
      id: 1,
      rating: 5,
      name: 'АО "ДПД РУС"',
      text: "Мы сотрудничаем с компанией ООО «Скайлайн Айр Карго» в области транспортной логистики. Качество предоставляемых транспортно-экспедиционных услуг характеризуется высоким уровнем профессионализма: комплексностью, своевременностью, оперативностью, индивидуальным и партнёрским подходом в решении всех возникающих вопросов. Всё это обеспечивает максимально комфортное взаимодействие. Мы готовы рекомендовать ООО «Скайлайн Айр Карго», как надёжного стратегического партнёра, выполняющего свои обязательства в соответствии с высокими профессиональными стандартами.",
      img: otziv1
    },
    {
      id: 2,
      rating: 5,
      name: 'ООО "Вайлдберриз"',
      text: "ООО «Вайлдберриз» сообщает, что Общество с ограниченной ответственностью «Скайлайн Айр Карго» является нашим деловым партнёром, своевременно и в полном объёме исполняет свои обязательства по договорам, а также соблюдает все устные и письменные договорённости. Мы высоко оцениваем его деловую репутацию, как ценного и ответственного партнёра и планируем дальнейшее сотрудничество с ним.",
      img: otziv2
    },
    {
      id: 3,
      rating: 5,
      name: 'ООО "Русский свет"',
      text: "Настоящим письмом выражаем вам свою признательность и благодарность за сотрудничество с нашей компанией в сфере перевозок. За весь период сотрудничества компания ООО «Скайлайн Айр Карго» зарекомендовала себя, как стабильный и ответственный партнёр, всегда обеспечивая гибкий подход к нашим потребностям, высокую оперативность и максимальную надёжность перевозок. Особо следует подчеркнуть тот факт, что отличительной чертой работы компании «Скайлайн айр карго» являстся оперативность и высокая организованность сотрудников компании, что наряду с готовностью быстро реагировать на возникающие обстоятельства позволяет решать самые нестандартные ситуации.",
      img: otziv3
    }
  ]

  return (
    <main className={styles.main}>
      <Header />
      <motion.div className={styles.main_container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className={styles.main_content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={logo_4x} alt="" width="300px" />
          <p>Skyline Air Cargo – это динамично развивающаяся компания,предоставляющая полный спектр услуг по грузоперевозкам различными видами собственного транспорта. Мы обеспечиваем надежную и эффективную доставку грузов любого объема, независимо от сложности маршрута.</p>
        </motion.div>
        {width > 800 ? (
          <BigForm />
        ) : (
          <motion.div className={styles.mobile_cont}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SmallForm />
            <img src={gruz1} alt="" width="300px" />
          </motion.div>
        )}
      </motion.div>
      <motion.div className={styles.block_why}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className={styles.text_cont}>
          <h1>Почему выбирают<br/>именно нас?</h1>
          <span></span>
        </div>
        <motion.div className={styles.items_cont}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {items.map((item) => (
            <motion.div className={styles.item} key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h1 style={{color: item.id_color}}>{item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.dest}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className={styles.partners}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      > 
        <img src={wb} alt="Wildberries" className={styles.wb_img} />
        <img src={dpd} alt="Dpd" className={styles.dpd_img} />
        <img src={rs} alt="Русский свет" className={styles.rs_img} />
      </motion.div>
      <motion.div className={styles.reviews}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>ОТЗЫВЫ</h1>
        <motion.div className={styles.reviews_container}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {reviews.map((item) => (
            <motion.div className={styles.reviews_item} key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Statistics />
      <Footer />
    </main>
  )
}
