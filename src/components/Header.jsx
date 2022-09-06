import React from 'react';

const style = {
  Header: "bg-[#2F43A1] h-16 w-[100%] sticky t-0",
  TitleText: "text-3xl lg:text-4xl my-2 font-bold text-[#FD7055] mx-5",
  Container:"flex justify-center items-center w-[95%] m-auto",
}


const Header = () => {
  return (
    <header className= {style.Header}>
      <div className= {style.Container}>
        <h1 className= {style.TitleText}>Lorem Ipsum</h1>
      </div>
    </header>
  );
}

export default Header;