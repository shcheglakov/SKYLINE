import { useState } from "react";
import styles from "./BigForm.module.scss";
import gruz3 from "/src/assets/img/gruz3.png";
import { motion } from "framer-motion";

export default function BigForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone: number }),
      });

      if (response.ok) {
        setMessage("Сообщение успешно отправлено!");
        setName("");
        setNumber("");
      } else {
        const errorData = await response.json();
        setMessage(`Ошибка при отправке: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      setMessage("Ошибка при отправке. Пожалуйста, попробуйте позже.");
      console.error("Ошибка при отправке:", error);
    } finally {
      setLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

  return (
    <motion.div
      className={styles.form_container}
      initial="hidden"
      animate="visible"
    >
      <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          variants={formVariants}
      >
        <h1>Оставить заявку</h1>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Номер телефона"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Отправка..." : "Отправить"}
        </button>
        {message && (
          <p
            style={{
              marginTop: "10px",
              color: message.startsWith("Ошибка") ? "red" : "green",
            }}
          >
            {message}
          </p>
        )}
      </motion.form>
      <motion.img src={gruz3} alt="" width="795px" height="351px" variants={imageVariants}/>
    </motion.div>
  );
}