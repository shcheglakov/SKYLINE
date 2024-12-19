import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
    const { name, phone } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: process.env.YANDEX_EMAIL,
                pass: process.env.YANDEX_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.YANDEX_EMAIL,
            to: 'skyline-a.c@yandex.ru',
            subject: 'Новая заявка с сайта',
            text: `Имя: ${name}\nНомер телефона: ${phone}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Успешно отправлено' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(400).json({ message: 'Неверный запрос'});
        res.status(500).json({ message: 'Error sending email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});