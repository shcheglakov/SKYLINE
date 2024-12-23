import styles from './Footer.module.scss'

export default function Footer() {
  const hrefs = {
    wp: "https://wa.me/79150422651",
    email: "mailto:skyline-a.c@yandex.ru",
    phone: "tel:+79150422651"
  }
  
  return (
    <div className={styles.footer_bg} id="footer">
      <footer className={styles.footer} id="footer">
        <div className={styles.logo_container}>
          <img src="../src/assets/logo/logo_4x.png" alt="" width="197px" />
          <p>Ваши надежные крылья в <br/>мире грузоперевозок</p>
        </div>
        <div className={styles.contacts}>
          <p>Контакты:</p>
          <a className={styles.contact_item} href={hrefs.wp}>
            <img src="../src/assets/icons/WP.svg" alt="" />
            <p>Whatsapp</p>
          </a>
          <a className={styles.contact_item} href={hrefs.email}>
            <img src="../src/assets/icons/Email.svg" alt="" />
            <p>skyline-a.c@yandex.ru</p>
          </a>
          <a className={styles.contact_item} href={hrefs.phone}>
            <img src="../src/assets/icons/Phone.svg" alt="" />
            <p>+7(915)042-26-51</p>
          </a>
        </div>

        <div className={styles.info}>
          <p className={styles.title}>Информация:</p>
          <p>ООО «Скайлайн айр карго»</p>
          <p>ИНН: 5047072779</p>
          <p>КПП: 504701001</p>
          <p>ОГРН: 1065047014780</p>
        </div>

        <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A17745896172f6e33892c398ad3cd50a2682d5e29770632a2e0c898028b26e553&amp;source=constructor" width="320" height="320"></iframe>
      </footer>
    </div>
  )
}
