import React from 'react'
import './index.css'
import AdminCard from '../AdminCard'

function Dashboard() {
  return (
    <div className='main-content dashboard container-fluid'>
        <h3 className='semibold-text'>Welcome back, Admin<span className='ds-pink'>.</span></h3>

        <main className='main admin-cards d-flex flex-wrap justify-content-center align-items-center mt-5'>
          {/* <AdminCard /> */}
          <AdminCard
            title='Monthly Income'
            subtitle='All your income for this month'
            figure='₦48,000'
          />

          <AdminCard
            title='Total Customers'
            subtitle='Customers who love Digital Superstore💓'
            figure='40'
          />

          <AdminCard
            title='Total orders'
            subtitle='Your all time orders'
            figure='4,000'
          />
          
        </main>
    </div>
  )
}

export default Dashboard