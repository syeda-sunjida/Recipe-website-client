// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhxFOQrEKCZlTdX3UaUwzRYeCkjRC9rUw",
  authDomain: "bangali-recipe-client.firebaseapp.com",
  projectId: "bangali-recipe-client",
  storageBucket: "bangali-recipe-client.appspot.com",
  messagingSenderId: "962475233022",
  appId: "1:962475233022:web:9e65ce3e357313db8c1faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 