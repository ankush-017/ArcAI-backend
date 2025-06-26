import express from 'express';
import { getUserController, registerController, sendOtpController, verifyOtpController } from '../Controllers/authController.js';
import { verifyFirebaseToken } from '../Middlewares/verifyFirebaseToken.js';

const router = express.Router();

router.post('/register', verifyFirebaseToken, registerController);
router.get('/role/:uid', verifyFirebaseToken, getUserController);
router.post('/send-otp', sendOtpController);
router.post('/verify-otp', verifyOtpController);


export default router;