import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import addNotification, { Notifications } from "react-push-notification";
import "./App.css";
import Profile from "./Profile";
import Weather from "./Weather";

const App = () => {
  //   const showNotification = () => {
  //     console.log("first");
  //     Notification.requestPermission().then((perm) => {
  //       if (perm === "granted") {
  //         new Notification("example notification");
  //       }
  //     });
  //   };

  const showNotification = () => {
    console.log("first");
    addNotification({
      title: "Push notification",
      subtitle: "demo",
      message: "Dummy notification",
      theme: "lightblue",
      position: "top-left",
      //   native: true,
    });
  };

  return (
    <>
      <Notifications />
      {/* <Weather />
      <button onClick={showNotification}>Show Notification</button>
      <Profile /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/webcam" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
