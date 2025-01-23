import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="notification">{message}</div>;
};

export default Notification;
