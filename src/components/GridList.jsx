import React from "react";
import Item from "./Item";

const style = {
  List: "flex flex-row gap-5 justify-items-center overflow-x-auto scroll-my-5 scroll-smooth",
  Section: "border-4 border-dotted border-[#e9db9a]",
  Text: "text-center text-[#FD7055] my-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold",
};

const GridList = ({ data }) => {
  return (
    <section className={style.Section}>
      <p className={style.Text}>Gallery</p>
      <section className={style.List}>
        {data.map((img) => (
          <Item key={img.id} imgSrc={img.imgnumber} text={img.text} />
        ))}
      </section>
    </section>
  );
};

export default GridList;
