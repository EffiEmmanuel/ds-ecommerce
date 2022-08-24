import React from 'react'
import './index.css'

function Dashboard() {
  return (
    <div className='main-content dashboard container-fluid'>
        <h3 className='semibold-text'>Welcome back, Admin<span className='ds-pink'>.</span></h3>

        <main className='main'>
          <div className='admin-card card' style={{width: "18rem"}}>
              <h5 className='card-title'>Monthly Income</h5>
              <small className='card-subtitle admin-card'>Your income for this month</small>
                <div className=''>$40,000</div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard