import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBjw6uBT7UdCYFeOEuse-yP7XmAo4wvWkc",
    authDomain: "real-estate-pro-bdf8b.firebaseapp.com",
    databaseURL:
      "https://real-estate-pro-bdf8b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "real-estate-pro-bdf8b",
    storageBucket: "real-estate-pro-bdf8b.appspot.com",
    messagingSenderId: "990812988530",
    appId: "1:990812988530:web:903cc84c1c10ab05a64eeb",
    measurementId: "G-3BE0QXKHFV",
  };

  const app = initializeApp(firebaseConfig);

  export default app;
