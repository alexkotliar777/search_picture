import React from 'react'
import css from "./Modal.module.css"

export default function Modal({ webformatURL, tags, onClick }) {
  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={webformatURL} alt={tags} />
      </div>
    </div>
  );
}
