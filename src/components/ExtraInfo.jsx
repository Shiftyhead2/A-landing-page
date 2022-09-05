const ExtraInfo = () => {
  return (
    <div className="flex flex-row justify-between shrink-0 h-60 xs:h-64 sm:h-72 md:h-80 lg:h-96  gap-2 border-b-4 border-r-4 border-l-4 border-dotted border-[#e9db9a]">
      <div className="basis-[55%] flex flex-col border-r-4 border-dotted border-[#e9db9a]">
        <div className="text-center lg:w-[60%]  m-auto">
          <h2 className="text-base text-[#fd7055] my-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Lorem ipsum
          </h2>
          <p className="text-xs text-white sm:text-sm md:text-base lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto harum, suscipit, voluptatem amet nostrum eos facilis,
            totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
      <div className="basis-[55%] flex flex-col">
        <div className="text-center lg:w-[60%]  m-auto">
          <h2 className="text-base text-[#fd7055] my-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Lorem ipsum
          </h2>
          <p className="text-xs text-white sm:text-sm md:text-base lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto harum, suscipit, voluptatem amet nostrum eos facilis,
            totam sed consequuntur nobis laborum. Provident, a accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
