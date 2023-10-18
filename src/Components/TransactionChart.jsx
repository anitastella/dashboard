import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const data=[
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400   

    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1400   

    },
    {
        name: 'March',
        Expense: 2000,
        Income: 1300   

    },
    {
        name: 'Apr',
        Expense: 3000,
        Income: 1100   

    },
    {
        name: 'May',
        Expense: 2000,
        Income: 1000   

    },
    {
        name: 'June',
        Expense: 3000,
        Income: 1600   

    },
    {
        name: 'July',
        Expense: 2000,
        Income: 1100   

    },
    {
        name: 'Aug',
        Expense: 4000,
        Income: 2000   

    },
    {
        name: 'Sep',
        Expense: 2000,
        Income: 1900   

    },
    {
        name: 'Oct',
        Expense: 3000,
        Income: 1800   

    },
    {
        name: 'Nov',
        Expense: 2000,
        Income: 1000   

    },
    {
        name: 'Dec',
        Expense: 3000,
        Income: 1800   

    },
]

function TransactionChart () {
  return(
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Transactions</strong>
   <div className='w-full mt-3 flex-1 text-xs'>
   <ResponsiveContainer width="100%" height= "100%">
<BarChart width={500}
          height={300}
          data={data}
          margin={{
            top:20,
            right:10,
            left:-10,
            bottom:0
          }}>
            <CartesianGrid strokeDasharray= "3 3 0 0" vertical={false}/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea588c" />
</BarChart>
</ResponsiveContainer>



  </div>
  </div>
  )
}
export default TransactionChart
