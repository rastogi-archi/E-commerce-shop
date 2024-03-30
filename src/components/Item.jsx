import React from 'react'

const Item = (props) => {
    return (
        <div>
            <img src={props.image} alt="" className='h-52 m-auto' />
            <p>{props.name}</p>
            <div>
                <div>
                    ${props.new_price}
                </div>
                <div>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
