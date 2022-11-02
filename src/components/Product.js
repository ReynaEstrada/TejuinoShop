import React from 'react'

function Product({Product}) {
  return (
    <div>
    <h2>{Product.title}</h2>
    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
      <img src={Product.thumbnail} alt={Product.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      <p>{Product.description.title}</p>
    </div>
  </div>
  );
}

export default Product;