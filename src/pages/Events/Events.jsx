import { Link, useLoaderData, useParams } from "react-router-dom";

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import Navbar from "../Shared/Navbar";


const Events = () => {
  const eventDetails = useLoaderData();

  const { id } = useParams();
  const details = eventDetails.find(details => details.id == id);
  console.log(details);

  return (


    <div className="mb-5">
      <Navbar></Navbar>
      <div className="shadow-lg p-5 rounded-lg mx-auto max-w-screen-2xl">
        <img className=" mx-auto" src={details.image} alt="" />
        <h2 className="w-full lg:w-60  mt-2 bg-green-700 text-white font-medium py-1 px-2 text-2xl  ">Starts from {details.price}</h2>
        <h2 className="text-3xl font-bold mt-5 mx-auto">{details.title}</h2>
        <h2 className="my-5">{details.description}</h2>
        <div className="flex justify-between">

          <Link to='/'> <button className="flex items-center gap-3 px-1 lg:px-10 py-1 lg:py-4 bg-[#D72050] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>Back to home</button></Link>

          <Link to='/pricing'> <button className="flex items-center gap-3 px-1 lg:px-10 py-1 lg:py-4 bg-[#D72050] text-white font-medium text-xl">Choose Plans <BsFillArrowRightSquareFill className="text-xl"></BsFillArrowRightSquareFill></button></Link>

        </div>
      </div>
    </div>





  );
};

export default Events;