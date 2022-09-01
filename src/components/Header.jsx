import React from 'react';

const style = {
  Header: "bg-[#40b0df] h-16  mb-1",
  TitleText: "text-3xl lg:text-4xl my-2 font-bold text-[#ffd53d] mx-5",
  Container:"flex justify-center items-center w-[95%] m-auto",
}


const Header = () => {
  return (
    <header className= {style.Header}>
      <div className= {style.Container}>
        <h1 className= {style.TitleText}>Slike Kolaž</h1>
      </div>
    </header>
  );
}

export default Header;