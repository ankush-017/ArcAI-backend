import admin from '../Utils/firebaseadmin.js';

export const verifyFirebaseToken = async (req, res, next) => {
    
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.uid = decodedToken.uid;
    next();
  } 
  catch (err) {
    console.error("Token verification failed", err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};