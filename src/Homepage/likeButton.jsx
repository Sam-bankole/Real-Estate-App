import React, { useState, useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref as databaseRef,
  get,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { MdFavoriteBorder } from "react-icons/md";

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
const db = getDatabase(app);
const propertiesInDB = databaseRef(db, "propertyList");

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Fetch initial like count when the component mounts
    likescount();
  });

  function likescount() {
    onValue(propertiesInDB, function (snapshot) {
      if (snapshot.exists()) {
        let propertyIds = Object.keys(snapshot.val());

        propertyIds.forEach((propertyId) => {
          fetchLikes(propertyId);
        });

        // fetchLikes(propertyId)
        // handleLikeClick(propertyIds)
      } else {
        console.log("no likes yet");
      }
    });
  }

  const fetchLikes = async (propertyId) => {
    try {
      const likesRef = databaseRef(db, `Properties/${propertyId}`);
      const snapshot = await get(likesRef);

      if (snapshot.exists()) {
        setLikeCount(snapshot.val().count);
        setLiked(snapshot.val().liked);
      }
    } catch (error) {
      console.error("Error fetching like count:", error);
    }
  };

  const handleLikeClick = async (propertyId) => {
    try {
      const likesRef = databaseRef(db, `Properties/${propertyId}`);

      if (!liked) {
        // If not liked, increment like count
        await set(likesRef, { count: likeCount + 1, liked: true });
        setLikeCount((prevCount) => prevCount + 1);
      } else {
        // If liked, decrement like count
        await set(likesRef, { count: likeCount - 1, liked: false });
        setLikeCount((prevCount) => prevCount - 1);
      }

      // Toggle liked state
      setLiked((prevLiked) => !prevLiked);
    } catch (error) {
      console.error("Error handling like click:", error);
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center">
        <MdFavoriteBorder onClick={() => handleLikeClick()} />
        <div className=" text-xs">{likeCount}</div>
      </div>
    </div>
  );
};

export default LikeButton;
