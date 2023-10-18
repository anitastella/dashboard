import React from 'react'
import { Link } from 'react-router-dom'
import { GetOrderStatus } from '../lib/utlis'
const RecentOrdersData =[
    {
        id: '1',
        customer_name : 'Shirley John',
        customer_mob: '9025732416',
        product: 'Iphone13Pro',
        order_status: 'SUCCESS'
    },
    {
        id: '2',
        customer_name : 'John',
        customer_mob: '9925733425',
        product: 'Samsung',
        order_status: 'PLACED'
    },
    {
        id: '3',
        customer_name : 'Ragunathan .S',
        customer_mob: '9756722527',
        product: 'One Plus',
        order_status: 'OUT FOR DELIVERY'
    },
    {
        id: '4',
        customer_name : 'Rodrig',
        customer_mob: '9332722527',
        product: 'Vivo',
        order_status: 'CONFIRMED'
    },
    {
        id: '5',
        customer_name : 'Mercy',
        customer_mob: '9926822577',
        product: 'Nokia',
        order_status: 'SHIPPED'
    }
    

]

function RecentOrders() {
    return(
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-red-700 font-medium'>Recent Order</strong>
            <div className='mt-3'>
                <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Mob</td>
                            <td>Product</td>
                            <td>Order_Status</td>
                        </tr>
                    </thead>

                    <tbody>
                        {RecentOrdersData.map((order) => (
                       
                       <tr key={order.id}>

                            <td>
                                <Link to={`/order/${order.id}`}>#{order.id}</Link>
                            </td>
                            
                            <td>
                                <Link to={`/customer_name/${order.customer_name}`}>{order.customer_name}</Link>
                            </td>

                            <td>
                                <Link to={`/customer_mob/${order.customer_mob}`}>{order.customer_mob}</Link>
                            </td>

                            <td>{order.product}</td>

                            <td>{GetOrderStatus(order.order_status)}</td>

                         </tr>
                         ))}
                 </tbody>
                </table>
                </div>
            </div>

    )
}

export default RecentOrders

