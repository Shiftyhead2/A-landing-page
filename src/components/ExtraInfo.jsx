import { AiFillLinkedin, AiFillInstagram, AiFillFacebook,} from "react-icons/ai";

const style = {
  Container:"flex flex-row justify-between shrink-0 h-60 xs:h-64 sm:h-72 md:h-80 lg:h-96  gap-2 border-b-4 border-r-4 border-l-4 border-dotted border-[#e9db9a]",
  RightContainer: "basis-[55%] flex flex-col",
  LeftContainer:"basis-[55%] flex flex-col border-r-4 border-dotted border-[#e9db9a]",
  ItemContainer: "text-center lg:w-[60%]  m-auto flex flex-col gap-5",
  Header:"text-base text-[#fd7055] my-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold",
  Paragraph: "text-xs text-white sm:text-sm md:text-base lg:text-xl",
  IconsContainer: "flex flex-row justify-evenly",
  IconContainer: "cursor-pointer transition ease-in-out duration-150 hover:scale-125",
  Icon: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
};

const ExtraInfo = () => {
  return (
    <div className={style.Container}>
      <div className={style.LeftContainer}>
        <div className={style.ItemContainer}>
          <h2 className={style.Header}>Lorem ipsum</h2>
          <p className={style.Paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto harum, suscipit, voluptatem amet nostrum eos facilis,
            totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
      <div className={style.RightContainer}>
        <div className={style.ItemContainer}>
          <h2 className={style.Header}>Lorem ipsum</h2>
          <p className={style.Paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto harum, suscipit, voluptatem amet nostrum eos facilis,
            totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
          <div className={style.IconsContainer}>
            <div className={style.IconContainer}>
              <AiFillLinkedin className={style.Icon} />
            </div>
            <div className={style.IconContainer}>
              <AiFillInstagram className={style.Icon} />
            </div>
            <div className={style.IconContainer}>
              <AiFillFacebook className={style.Icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
