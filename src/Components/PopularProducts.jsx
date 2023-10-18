import React from 'react'
import { Link } from 'react-router-dom'

const PopularProductsData= [
    {
        id:'3432',
        product_name:'Apple mac pro',
        product_thumbnail:'https://source.unsplash.com/100x100?macbook',
        product_prize:'$1499.00',
        product_stock:'14'
    },
    {
        id:'3432',
        product_name:'Samsung buds 2',
        product_thumbnail:'https://source.unsplash.com/100x100?earbuds',
        product_prize:'$4499.00',
        product_stock:'34'
    },
    {
        id:'3432',
        product_name:'LG flex canvas',
        product_thumbnail:'https://source.unsplash.com/100x100?smartphone',
        product_prize:'$799.00',
        product_stock:'242'
    },
    {
        id:'3432',
        product_name:'Apple magic touchpad',
        product_thumbnail:'https://source.unsplash.com/100x100?touchpad',
        product_prize:'$2499.00',
        product_stock:'200'
    },
    {
        id:'3432',
        product_name:'Asus Zenbook Pro',
        product_thumbnail:'https://source.unsplash.com/100x100?laptop',
        product_prize:'$499.00',
        product_stock:'352'
    },
]

function PopularProducts () {
    return(
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
            <strong className='text-gray-700 font-medium'>Popular Products </strong>
            <div className='mt-4 flex flex-col gap-3'>
                {PopularProductsData.map(product => (
                    <Link key ={`/product/${product.id} `} className='flex hover:no-underline'>
                        <div className='w-10 h-18 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img 
                             className='w-full h-full object-cover' 
                             src={product.product_thumbnail}
                              alt={product.product_name}
                              />
                        </div>
                        <div className='ml-4 flex-1'>
                            <p className='text-sm text-gray-800'>{product.product_name} </p>
                            <span className={`text-sm font-medium ${product.product_stock === 0 ?' text-orange-500' : 'text-green-400' }`}>
                                 {product.product_stock === 0 ? 'Out of stock': product.product_stock + 'in stock'}</span>
                        </div>
                        <div className='text-xs text-gray-400 pl-2'>{product.product_prize}</div>
               </Link>

               ) )}

            </div>

        </div>
    )

}

export default PopularProducts