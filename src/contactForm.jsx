import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

export default function Contactform() {
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
  const database = getDatabase(app);
  const sendMessageToOpretor = ref(database, "Message");

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const eturn = document.getElementById("return");

  const handleNameChange = (e) => setInputName(e.target.value);
  const handleEmailChange = (e) => setInputEmail(e.target.value);
  const handlePhoneChange = (e) => setInputPhone(e.target.value);
  const handleMessageChange = (e) => setInputMessage(e.target.value);

  function sendMessage() {

    if (!eturn) {
      // Log an error or handle the situation where "eturn" is not available
      console.error("Element with ID 'return' not found.");
      return;
    }

     eturn.innerHTML = "" 


    // Access values when sending the message
    const messageData = {
      Name: inputName,
      email: inputEmail,
      phone: inputPhone,
      message: inputMessage,
    };

    // Check if required fields are filled

    if (!messageData.Name || !messageData.email || !messageData.phone || !messageData.message) {
      eturn.innerHTML += `<div className = " text-red-500">Fill up your name and contact info</div>`;
    } else {
      eturn.innerHTML += `<div className=" text-green-500" >We will get in touch with you via phone/mail</div>`;
      setInputName('');
      setInputEmail('');
      setInputPhone('');
      setInputMessage('');
    }
    // Clear the eturn div
    // Clear after 3 seconds (adjust as needed)
    
    push(sendMessageToOpretor, messageData);

    // clearInput();
  }

  return (
    <div className=" p-3 2xsm:p-2 mt-4 2xsm:w-56 rounded-xl shadow-lg w-80 2sm:w-64 px-5">
      <div className=" 2sm:text-sm">
        <div className=" font-bold text-xl mb-3 2sm:text-base">Make an Inquirery</div>
        <div className=" mb-4 font-thin">Communicate with an Expert</div>
        <div className=" text-center">
          <div className=" mb-5">
            <input
              type="text"
              value={inputName}
              onChange={handleNameChange}
              placeholder="Name"
              className=" w-64 2sm:w-56 2xsm:w-52 h-12 rounded-lg border-2 bg-transparent pl-2"
            />
          </div>
          <div>
            <input
              type="email"
              value={inputEmail}
              onChange={handleEmailChange}
              placeholder="Email"
              className="2xsm:w-52 2sm:w-56 w-64 h-12 rounded-lg border-2 bg-transparent mb-10 pl-2"
            />
          </div>
          <div>
            <input
              type="text"
              value={inputPhone}
              onChange={handlePhoneChange}
              placeholder="Phone"
              className="2xsm:w-52 w-64 2sm:w-56 h-12 rounded-lg border-2 bg-transparent mb-10 pl-2"
            />
          </div>
          <div>
            <textarea
              type="text"
              value={inputMessage}
              onChange={handleMessageChange}
              placeholder="Aks a question"
              className="2xsm:w-52 2sm:w-56 w-64 h-16 rounded-lg border-2 bg-transparent pl-2"
            />
          </div>
          <button
            onClick={sendMessage}
            className=" bg-amber-500 hover:bg-slate-500 active:bg-amber-500 px-10 py-4 font-semibold text-white"
          >
            Enquire
          </button>
          <div className=" text-sm" id="return"></div>
        </div>
      </div>
    </div>
  );
}
