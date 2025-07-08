import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoutes from './Routes/authRoutes.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://arcai0.netlify.app',
  'https://arcaiengineer.vercel.app',
  'https://arcai.engineer',
  'https://www.arcai.engineer'
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.log("Blocked by CORS:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Must handle OPTIONS preflight
app.options("*", cors());

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('server sun raha hai');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));