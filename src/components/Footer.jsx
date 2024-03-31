import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiPinterestFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='font-[Roboto]'>
            <div className='flex justify-center items-center'>
                <img src="\logo.jpg" alt="" className='h-20' />
                <div className='uppercase font-semibold'>shopper</div>
            </div>
            <div className='flex justify-center items-center gap-2 text-sm text-gray-700'>
                <Link>Company</Link>
                <Link>Products</Link>
                <Link>Offices</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
            <div className='flex justify-center items-center mt-2 gap-4 text-xl mb-4'>
                <Link><FaInstagram /></Link>
                <Link><RiPinterestFill /></Link>
                <Link><FaWhatsapp /></Link>
            </div>
            <hr className='footer_line' />
            <p className='text-gray-600 text-xs text-center mt-4 mb-4'>Copyright @ 2024 - All Right Reserved</p>
        </footer>
    )
}

export default Footer
