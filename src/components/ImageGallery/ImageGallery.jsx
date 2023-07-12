import React from 'react'
import css from "./ImageGallery.module.css"
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({images}) {
  return <ul className={css.ImageGallery}>{
    images.map(item => <ImageGalleryItem key={item.id} {...item}/>)
  }</ul>;
}
