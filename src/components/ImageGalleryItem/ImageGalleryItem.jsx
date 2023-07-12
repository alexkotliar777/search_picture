import React, { useEffect, useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ webformatURL, tags }) {
  const [status, steStatus] = useState(false);

  const onEscape =(event)=> {
    if(event.code === "Escape"){
      steStatus(false)
    }
  }

  useEffect(()=>{
    if(status) {
      window.addEventListener("keydown",onEscape)
    }else{
      window.removeEventListener('keydown', onEscape);
    }
  },[status])
  const openModal = () => {
    steStatus(true);
  };
  const modalClose =()=>{
    steStatus(false)
  }

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.image}
        onClick={openModal}
      />
      {status && (
        <Modal webformatURL={webformatURL} tags={tags} onClick={modalClose} />
      )}
    </li>
  );
}
