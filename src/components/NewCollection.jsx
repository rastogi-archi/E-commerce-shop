import React from 'react'
import new_collections from './NewCollectionData'
import Item from './Item'

const NewCollection = () => {
    return (
        <>
            <div className='font-[Roboto]'>
                <h2 className='text-center font-bold uppercase mt-7 text-2xl'>new collections</h2>
                <div className='new_line'></div>
            </div>
            <div className='mt-5 grid grid-cols-3 xl:flex xl:justify-center xl:items-center xl:gap-5 xl:flex-wrap'>
                {new_collections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </>
    )
}

export default NewCollection
