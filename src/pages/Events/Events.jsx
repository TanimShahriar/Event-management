import { Link, useLoaderData, useParams } from "react-router-dom";

import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Navbar from "../Shared/Navbar";


const Events = () => {
  const eventDetails = useLoaderData();

  const { id } = useParams();
  const details = eventDetails.find(details => details.id == id);
  console.log(details);

  return (


    <div>
      <Navbar></Navbar>
      <div className="shadow-lg p-5 rounded-lg mx-auto max-w-screen-2xl">

        <img className=" mx-auto" src={details.image} alt="" />
        <h2 className="text-2xl font-bold mt-5 mx-auto">{details.title}</h2>
        <h2 className="my-5">{details.description}</h2>
        <Link to='/'> <button className="flex items-center gap-3 lg:px-10 py-4 bg-[#D72050] text-white font-medium text-xl"> <BsFillArrowLeftSquareFill className="text-xl"></BsFillArrowLeftSquareFill>All Events</button></Link>
      </div>
    </div>





  );
};

export default Events;