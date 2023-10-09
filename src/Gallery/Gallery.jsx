import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Gallery = () => {
  return (

    <div className="mt-10">
      <h2 className="text-center text-3xl font-semibold underline mb-5">Photo Gallery</h2>
      <Link to='/'> <button className="flex items-center gap-3 px-2 lg:px-7 ml-4 py-1 lg:py-3 bg-[#D72050] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to Home</button></Link>
      <div className="grid lg:grid-cols-3 gap-3 p-4">
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/ygg7Rby/Gallery-1.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/gWY5ZRV/Gallery-2.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/Dtf6wN7/Gallery-3.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/W63yf5Q/Gallery-4.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/1bWmFnm/Gallery-5.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/pWpNzkQ/Gallery-6.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/Fnj7pdy/Gallery-7.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/L0cxxV1/Gallery-8.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/qFkXM7h/Gallery-9.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/Zxp4LzT/Gallery-10.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/zNjrydY/Gallery-13.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/7g7NV8V/Gallery-14.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/MPHL9r4/Gallery-15.jpg" alt="" />

        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/Z2c379D/Gallery-20.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/RpDtg3c/Gallery-23.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/r42DsPc/Gallery-24.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/ZM9DF2X/Gallery-31.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/41w5HBY/Gallery-32.jpg" alt="" />

        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/zGyZMqg/Gallery-33.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/sggyXp2/Gallery-34.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/TPzff9z/Gallery-35.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/3d1Kbhg/Gallery-16.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/M5D16Yc/Gallery-25.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/P15mCYS/Gallery-22.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="https://i.ibb.co/3yQKwTp/Gallery-21.jpg" alt="" />
      </div>

    </div>


  );
};

export default Gallery;