import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

// Fix private_key newlines
const raw = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
raw.private_key = raw.private_key.replace(/\\n/g, '\n');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(raw),
  });
}

export default admin;