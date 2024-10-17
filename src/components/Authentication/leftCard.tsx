const LeftCard = () => {
  return (
    <div className="hidden lg:flex-1 lg:flex lg:justify-end lg:items-center">
      <div className="flex bg-cardDisabled/50 bg-opacity-40 lg:w-8/12 lg:h-3/5 lg:mr-16 justify-center items-center flex-col rounded-3xl">
        <h1 className="text-white text-5xl lg:text-5xl md:text-3xl font-bold p-3">
          Welcome To
        </h1>
        <p className="text-white font-thin text-xl">Dhun</p>
      </div>
    </div>
  );
};

export default LeftCard;
