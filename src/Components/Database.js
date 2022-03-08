import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAU1E_MKCw3g9yRhi8HcJ2vaUTpwQ12qxw",
  authDomain: "calyantra-com.firebaseapp.com",
  databaseURL: "https://calyantra-com-default-rtdb.firebaseio.com",
  projectId: "calyantra-com",
  storageBucket: "calyantra-com.appspot.com",
  messagingSenderId: "1010817516830",
  appId: "1:1010817516830:web:99b123b356d7475bd2350f",
  measurementId: "G-0VWX6C7ZD2",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;
