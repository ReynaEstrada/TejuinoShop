import React from 'react'

function Product({item}) {
  return (
    <div>
      <h2>{item.title}</h2>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        <p>{item.description.title}</p>
      </div>
    </div>
  );
}

export default Product;