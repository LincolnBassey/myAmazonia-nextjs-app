'use client'
import React from 'react'
import Header from '../components/Header';
import Image from 'next/image'
import { useBearStore } from '@/store'
import { useSession } from "next-auth/react"
import CheckoutProduct from '../components/CheckoutProduct';

const Checkout = () => {
    const { cartItems, totalPrice } = useBearStore((state) => state);
    const { data: session } = useSession();

  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex max-w-screen-2xl mx-auto mt-[7rem]'>
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                    src='https://links.papareact.com/ikj'
                    alt='Banner Image'
                    height={250}
                    width={1020}
                    className='object-contain'
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                      {cartItems.length === 0 ? 'Your Amazon Basket is empty.' : "Shopping Basket"}
                    </h1>
                    {cartItems.map((item => (
                        <CheckoutProduct 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                            quantity={item.quantity}
                        />
                    )))}
                 </div>
            </div>
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {cartItems.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>
                             Subtotal({cartItems.length} {cartItems.length > 1 ? 'Items' : 'item'}):
                            <span className='font-bold'>{" "}${totalPrice.toFixed(2)}</span>
                        </h2>


                         <button 
                            disabled={!session}
                        className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? 'Sign in to checkout' : 'Proceed to checkout'}</button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout;