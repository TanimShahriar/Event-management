import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('event.json')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, [])

  return (
    <div className="mt-20">
      <div className='grid grid-cols-3 gap-4 container mx-auto my-5'>
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>

    </div>
  );
};

export default Categories;