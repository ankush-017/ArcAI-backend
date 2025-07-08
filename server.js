import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173',
    'https://arcai0.netlify.app',
    'https://arcaiengineer.vercel.app',
    'https://arcai.engineer',
    'https://www.arcai.engineer'
  ],
  credentials: true,
}));

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('server sun raha hai');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));