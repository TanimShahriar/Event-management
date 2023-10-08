import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";



const Pricing = () => {
  return (

    <div>

      <div className=" ">
        <h2 className="text-4xl text-center font-bold my-5">Pricing Plan</h2>
        <p className="text-center max-w-screen-lg mx-auto  "> We offer tiered packages, such as Silver, Gold, and Platinum plans, to provide clients with a range of options and services tailored to their specific needs and budgets. Here's a description of event management plans with these tiers:</p>
        <div className=" grid lg:grid-cols-3  md:flex-row flex-col  py-2 my-10 gap-y-7 gap-x-10  ">
          <div
            className="p-1  bg-gradient-to-t from-gray-900 to-gray-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current lg:p-5   hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Silver</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                <div className="text-3xl md:text-5xl">800</div>

              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href="">Select</a></div>
              <div
                className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1">All basic features</div>
                <div className="m-1">Basic event design and decor</div>
                <div className="m-1">Guest list management</div>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-b from-orange-500 to-yellow-500 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-1 lg:p-5  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Gold</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                <div className="text-3xl md:text-5xl">2500</div>

              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href="">Select</a></div>
              <div
                className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1"> All services included in the Silver</div>
                <div className="m-1">More extensive event design and decor</div>
                <div className="m-1">Customized event branding and signage</div>
                <div className="m-1">Enhanced vendor coordination</div>
                <div className="m-1">Affiliates</div>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-1 lg:p-5  hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="text-3xl ">Platinum</div>
              <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                <div className="text-3xl md:text-5xl">5500</div>

              </div>
              <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <a href="">Select</a></div>
              <div
                className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                <div className="m-1">All services included in the Gold Plan</div>
                <div className="m-1">Comprehensive event planning </div>
                <div className="m-1"> Extensive customization and personalization.</div>
                <div className="m-1">High-end event design and decor</div>
                <div className="m-1">Customized event experiences and activities</div>
                <div className="m-1">VIP guest management</div>
                <div className="m-1">Hospitality services</div>
                <div className="m-1">Premium concierge services</div>

              </div>
            </div>
          </div>



        </div>




      </div>
      <Link to='/'> <button className="flex items-center gap-3 px-2 lg:px-6 py-1 lg:py-2 bg-[#D72050] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to home</button></Link>
    </div>



  );
};

export default Pricing;