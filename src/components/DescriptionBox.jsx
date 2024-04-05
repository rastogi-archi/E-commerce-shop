import React from 'react'

const DescriptionBox = () => {
    return (
        <div className='ml-3 mr-3 mt-6 text-xs'>
            <div className='flex font-semibold'>
                <div className='border p-2'>Description</div>
                <div className='border p-2'>Reviews(122)</div>
            </div>
            <div className='border p-2 mb-6'>
                <div>
                    An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibilty, and the global reach they offer.
                </div>
                <div className='mt-4'>
                    E-commerce website typically display products or services along with detailed descriptions, images, price, and any available variations(eg., sizes, colors). Each product usually has its own dedicated page with relevant information.
                </div>
            </div>
        </div>
    )
}

export default DescriptionBox
