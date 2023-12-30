import React, { useEffect } from 'react';
import style from './Alert.module.css';

const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${style.alert} ${style[type]}`} onClick={onClose}>
      {message}
    </div>
  );
};

export default Alert;