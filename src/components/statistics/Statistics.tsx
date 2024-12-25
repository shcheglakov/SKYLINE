import styles from './Statistics.module.scss'

export default function Statistics() {
  const statistics_kol = [
    {
      id: 1,
      kol: "10 000",
      title: "Отправленных заказов"
    },
    {
      id: 2,
      kol: "1000",
      title: "Довольных клиентов"
    },
    {
      id: 3,
      kol: "10 000",
      title: "Км каждый день"
    }
  ]
  return (
    <div className={styles.statistics_bg}>
      <div className={styles.statistics_block}>
        {statistics_kol.map((item) => (
          <div className={styles.statistics_item} key={item.id}>
            <h1>{item.kol}</h1>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
