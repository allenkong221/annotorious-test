import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: 'anna-extract.firebaseapp.com',
  projectId: 'anna-extract',
  storageBucket: 'anna-extract.appspot.com',
  messagingSenderId: '28742075024',
  appId: '1:28742075024:web:92d9375d21da6f00294e15',
}

const app = initializeApp(firebaseConfig)

export default app
