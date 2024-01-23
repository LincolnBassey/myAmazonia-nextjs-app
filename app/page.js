'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner';
import ProductFeed from './components/ProductFeed';

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
      const getProducts = async () => {
          try {
              const response = await fetch('https://fakestoreapi.com/products');                
              const _products = await response.json();
              setProducts(_products);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      getProducts()
  }, []);

  return (
    <div className="bg-gray-100 relative">
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        {products && <ProductFeed products={products}/>}
      </main>
    </div>
  )
}
