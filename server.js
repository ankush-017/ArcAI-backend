import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js';
dotenv.config();

const app = express();

app.use(cors({
  origin: '*',  // allow all origins for quick test ONLY
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