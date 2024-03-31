import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    return (
        <nav className='flex justify-evenly sm:justify-around items-center font-[Roboto]'>
            <Link to='/'>
                <div className='flex justify-center items-center uppercase font-semibold sm:flex-row flex-col'>
                    <img src="\logo.jpg" alt="SHOPPER" className='h-12 sm:h-16' />
                    <p className='text-xs sm:text-lg'>shopper</p>
                </div>
            </Link>
            <ul className='flex justify center space-x-2 sm:space-x-6 text-xs sm:text-sm md:text-lg'>
                <li className='cursor-pointer' onClick={() => { setMenu("shop") }}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li className='cursor-pointer' onClick={() => { setMenu("men") }}><Link to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li className='cursor-pointer' onClick={() => { setMenu("women") }}><Link to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li className='cursor-pointer' onClick={() => { setMenu("kids") }}><Link to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <button className='rounded-3xl border w-12 p-1 sm:w-20 text-xs md:text-lg'><Link to='/login'>Login</Link></button>
            <div className='flex text-2xl sm:text-3xl'>
                <Link to='cart'>
                    <IoCartOutline />
                </Link>
                <div className='ml-[-9px] mt-[-7px] rounded-full bg-red-500 h-4 w-4 text-base flex justify-center items-center'>0</div>
            </div>
        </nav>
    )
}

export default Navbar

