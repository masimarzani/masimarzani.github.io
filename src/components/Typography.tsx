export default function Typography() {
  return (
    <div className="mt-6 sm:mt-10 w-full flex justify-center items-center px-4">
      <div className="flex flex-col gap-3 sm:gap-5 w-full sm:w-max text-center">
        <h1 className="typography text-3xl sm:text-5xl whitespace-nowrap">
          Backend Developer
        </h1>
        <span className="text-[18px] sm:text-[24px] text-gray-400/80 font-light leading-6 sm:leading-7">
          Over a decade of experience in building
          <br className="hidden sm:block" /> exceptional websites and digital
          products
        </span>
      </div>
    </div>
  );
}
