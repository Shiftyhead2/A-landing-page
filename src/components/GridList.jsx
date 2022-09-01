import React from 'react';
import Item from "./Item";

const style = {
  List: "flex flex-row gap-5 mx-5 justify-items-center overflow-x-auto scroll-my-5",
}

const GridList = ({data}) => {
  return (
    <section className="bg-gray-300 rounded">
      <p className="text-center my-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Gallery</p>
      <section className={style.List}>
        {data.map((img) => 
          <Item key = {img.id} imgSrc = {img.imgnumber} text = {img.text} />)}
      </section>
    </section>
  );
}

export default GridList;