import React, { useEffect, useState } from 'react';
import Categorie from '../Categorie/Categorie';

const Categories = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://mysterious-ridge-48147.herokuapp.com/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='pt-8 container'>
      <div className="grid grid-cols-4 gap-6">
        {
          categories.map(categorie => <Categorie
            key={categorie._id}
            categorie={categorie}
          />)
        }
      </div>
    </div>
  );
};

export default Categories;