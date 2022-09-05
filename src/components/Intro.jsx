const Intro = () => {
  return (
    <div className="flex flex-row justify-between shrink-0  gap-2 border-t-4 border-r-4 border-l-4 border-dotted border-[#e9db9a]">
      <div className="basis-[55%] flex flex-col border-r-4 border-dotted border-[#e9db9a]">
        <div className="text-center lg:w-[60%]  m-auto">
          <h2 className="text-base text-[#fd7055] my-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold">Lorem ipsum</h2>
          <p className="text-xs text-white sm:text-sm md:text-base lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad architecto harum, suscipit, voluptatem amet nostrum eos facilis, totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
      <div className="basis-[55%] my-2 mx-2">
        <img
          src={"./images/background-photo1.jpg"}
          className="object-cover  lg:w-full h-auto"
        ></img>
      </div>
    </div>
  );
};

export default Intro;
