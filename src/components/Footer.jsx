const style = {
  Footer: "bg-[#2F43A1] w-[100%] sticky b-0 h-16",
  FooterText: "text-base lg:text-xl my-4 font-bold text-[#FD7055] mx-5",
  Container:"flex justify-center items-center w-[95%] m-auto",
}



const Footer = () => {
  return (
    <footer className= {style.Footer}>
      <div className= {style.Container}>
        <h2 className={style.FooterText}>Copyright &copy;2022 </h2>
      </div>
    </footer>
  );
}

export default Footer;