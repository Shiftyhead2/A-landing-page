const Intro = () => {
  return (
    <div className="flex flex-row justify-between shrink-0  gap-2">
      <div className="basis-[55%] flex flex-col">
        <div className="text-center lg:w-[60%]  m-auto">
          <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold">Lorem ipsum.</h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad architecto harum, suscipit, voluptatem amet nostrum eos facilis, totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
      <div className="basis-[55%]">
        <img
          src={"./images/background-photo1.jpg"}
          className="object-cover  lg:w-full h-auto"
        ></img>
      </div>
    </div>
  );
};

export default Intro;
