import React from 'react';

const style = {
  ItemContainer:"flex flex-col justify-center gap-1 shrink-0 mx-2",
  ImageContainer:"w-[128px] md:w-[256px] lg:w-[512px] h-auto",
  Img:"object-contain rounded-[10px]",
  TextParagraph:"text-sm text-white md:text-base lg:text-xl text-center mb-5"
}

const Item = ({imgSrc,text}) => {
  return (
    <div className={style.ItemContainer}>
      <div className={style.ImageContainer}>
        <img src = {`./images/image${imgSrc}.jpg`} className = {style.Img} alt = {text}></img>
      </div> 
      <p className={style.TextParagraph}>{text}</p>
    </div>
  );
}

export default Item;