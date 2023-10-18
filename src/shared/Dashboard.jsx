import React from 'react'
import Dashboardstatsgrid from '../Components/Dashboardstatsgrid'
import TransactionChart from '../Components/TransactionChart'
import BuyerProfileChart from '../Components/BuyerProfileChart'
import RecentOrders from '../Components/RecentOrders'
import PopularProducts from '../Components/PopularProducts'



export default function Dashboard() {
    return(
        <div  className='flex flex-col gap-4'>
         <Dashboardstatsgrid/>
         <div className='flex flex-row gap-4 w-full'>
         <TransactionChart/>
         <BuyerProfileChart/>
        </div>  
        <div className='flex flex-row gap-4 w-full'>
            <RecentOrders/>
            <PopularProducts />
        </div>

        </div>  
 
    )
}