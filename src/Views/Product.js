// product.js
import React from 'react';
import './Product.css';

const products = [
  {
    title: 'Embossed crocodile clutch',
    desc: 'Luxurious texture, unmistakable style.',
    price: '$65.00 USD',
    oldPrice: '$70.00 USD',
    image: 'https://via.placeholder.com/300x300?text=Clutch',
    hasOverlay: true,
  },
  {
    title: 'Metallic statement purse',
    desc: 'Shine with our Metallic Purse.',
    price: '$65.00 USD',
    oldPrice: '$70.00 USD',
    image: 'https://via.placeholder.com/300x300?text=Metallic+Purse',
  },
  {
    title: 'Stylish Saffiano',
    desc: 'Elevate your style with Stylish Saffiano.',
    price: '$65.00 USD',
    oldPrice: '$70.00 USD',
    image: 'https://via.placeholder.com/300x300?text=Saffiano',
  },
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="image-container">
      <img src={product.image} alt={product.title} />
      {product.hasOverlay && (
        <button className="overlay-button">VIEW PRODUCT</button>
      )}
    </div>
    <h3>{product.title}</h3>
    <p className="desc">{product.desc}</p>
    <div className="price">
      <span className="current">{product.price}</span>
      <span className="old">{product.oldPrice}</span>
    </div>
  </div>
);

const ProductList = () => (
  <div className="product-list">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

export default ProductList;
