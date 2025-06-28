import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js'

dotenv.config();

const app = express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://arcaiengineer.vercel.app',
  'https://arcai.engineer',
  'https://arcai0.netlify.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow curl/Postman
    if (allowedOrigins.some(allowed => origin.startsWith(allowed))) {
      return callback(null, true);
    }
    console.log("Blocked by CORS:", origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('server sun raha hai')
})
app.use('/api/auth', authRoutes);
app.use('/api/user', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running at port ${PORT}`));