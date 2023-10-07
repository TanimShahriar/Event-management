import { Link } from "react-router-dom";

const Category = ({ category }) => {

  const { name, id, price, title, image, description } = category;

  return (
    <Link to={`/donationDetails/${id}`} className={`rounded-lg border-purple-600 border cursor-pointer`}>
      <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
      <div className="">
        <h2 className="mx-4 w-1/4  font-medium py-1 text-xl rounded-md ">{price}</h2>
        <p className=" mx-4 mb-4 mt-2 font-medium text-xl">{title}</p>
        <p className=" mx-4 mb-4 mt-2 ">{description}</p>
      </div>
    </Link>
  );
};

export default Category;

