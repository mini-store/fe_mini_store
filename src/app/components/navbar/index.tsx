import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
//import React, { useState, useEffect } from 'react';
//import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  return (
    <section>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
        <div>
          <Link href='/'>
            <h1 className='font-bold text-2xl'>
              UPH Store
            </h1>
          </Link>
        </div>
        <div>
          <ul className='sm:flex font-bold'>
            <li className='p-4'>
              <Link href='/'>Product Populer</Link>
            </li>
            <li className='p-4'>
              <Link href='/'>New Arivval</Link>
            </li>
            <li className='p-4'>
              <Link href='/'>All Product</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='sm:flex items-center font-bold'>
            <li className='p-4'>
              <Link href='/signin'>Sign In</Link>
            </li>
            <li className='p-4'>
              <Link href=''><AiOutlineSearch/></Link>
            </li>
            <li className='p-4'>
              <Link href=''><AiOutlineHeart/></Link>
            </li>
            <li className='p-4'>
              <Link href=''><AiOutlineShoppingCart/></Link>
            </li>
          </ul>
        </div>
    </div>
    </section>
  )
}
