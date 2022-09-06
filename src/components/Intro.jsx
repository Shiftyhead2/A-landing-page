const style = {
  Container:"flex flex-row justify-between shrink-0  gap-2 border-t-4 border-r-4 border-l-4 border-dotted border-[#e9db9a]",
  RightItemContainer:"basis-[55%] flex flex-col border-r-4 border-dotted border-[#e9db9a]",
  RightTextContainer: "text-center lg:w-[60%]  m-auto flex flex-col gap-5",
  LeftItemContainer: "basis-[55%] my-2 mx-2",
  Header:"text-base text-[#fd7055] my-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold",
  Paragraph: "text-xs text-white sm:text-sm md:text-base lg:text-xl",
  Img: "object-cover  lg:w-full h-auto",
};

const Intro = () => {
  return (
    <div className={style.Container}>
      <div className={style.RightItemContainer}>
        <div className={style.RightTextContainer}>
          <h2 className={style.Header}>Lorem ipsum</h2>
          <p className={style.Paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto harum, suscipit, voluptatem amet nostrum eos facilis,
            totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
      <div className={style.LeftItemContainer}>
        <img src={"./images/background-photo1.jpg"} className={style.Img}></img>
      </div>
    </div>
  );
};

export default Intro;
