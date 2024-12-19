import { useState } from "react";
import styles from "./SmallForm.module.scss"

export default function SmallForm() {
  const [name, setName] = useState("");
      const [number, setNumber] = useState("");
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setMessage("");
  
          try {
              const response = await fetch('http://localhost:5000/api/send-email', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
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
              setMessage('Ошибка при отправке. Пожалуйста, попробуйте позже.');
              console.error("Ошибка при отправке:", error);
          } finally {
               setLoading(false);
          }
      };
      
  return (
    <form className={styles.form_conatiner} onSubmit={handleSubmit}>
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
        {loading ? 'Отправка...' : 'Отправить'}
      </button>
      {message && <p style={{marginTop: '10px', color: message.startsWith('Ошибка') ? 'red' : 'green'}}>{message}</p>}
    </form>
  )
}
