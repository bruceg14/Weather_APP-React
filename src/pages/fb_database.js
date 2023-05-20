import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA4Lz43jG7SCWBaP3ffSaxWmxAZCZZIrbY",
  authDomain: "weatherapp-97301.firebaseapp.com",
  projectId: "weatherapp-97301",
  storageBucket: "weatherapp-97301.appspot.com",
  messagingSenderId: "602597874362",
  appId: "1:602597874362:web:edec1c54041b58afbcc083",
  measurementId: "G-7RX0ZF8YWZ",
  databaseURL: "https://weatherapp-97301-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default app
