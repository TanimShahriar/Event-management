import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Gallery = () => {
  return (

    <div className="mt-10">
      <h2 className="text-center text-3xl font-semibold underline mb-5">Photo Gallery</h2>
      <Link to='/'> <button className="flex items-center gap-3 px-2 lg:px-7 ml-4 py-1 lg:py-3 bg-[#D72050] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to Home</button></Link>
      <div className="grid lg:grid-cols-3 gap-3 p-4">
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-1.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-2.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-3.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-4.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-5.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-6.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-7.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-8.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-9.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-10.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-11.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-16.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-13.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-14.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-22.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-23.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-24.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-25.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-20.jpg" alt="" />
        <img className="h-60 lg:h-[354px]" src="/public/Resources/Gallery-15.jpg" alt="" />
      </div>
    </div>


  );
};

export default Gallery;