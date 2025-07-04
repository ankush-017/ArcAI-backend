import express from 'express';
import { getAllUserController, getUserController, getuserControllerbyUID, registerController, sendOtpController, updateProfileController, userVerifybyEmailController, verifyOtpController } from '../Controllers/authController.js';
import { verifyFirebaseToken } from '../Middlewares/verifyFirebaseToken.js';

const router = express.Router();

router.post('/register', verifyFirebaseToken, registerController);
router.get('/role/:uid', verifyFirebaseToken, getUserController);
router.post('/send-otp', sendOtpController);
router.post('/verify-otp', verifyOtpController);
router.post('/check-email',userVerifybyEmailController);
router.get('/getuser/:uid',getuserControllerbyUID);
router.put('/update-profile',verifyFirebaseToken,updateProfileController);
router.get('/', getAllUserController);


export default router;