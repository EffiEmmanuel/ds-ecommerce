import React, { useEffect, useState } from 'react'
import './index.css'
import AdminCard from '../AdminCard'
import axios from 'axios';

function Dashboard() {
  const admin = JSON.parse(sessionStorage.getItem('admin'))
  const adminName = admin.name
  const [stats, setStats] = useState(null);

  let currency = Intl.NumberFormat('en-US')

  useEffect(() => {
    async function getStats() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ADMIN}/getAllUserStats`
        )
        .then((res) => {
          setStats(res.data.Data);
          console.log("RESPONSE:", res);
          console.log("INCOME:", res.data.Data.income[0]?.total);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getStats();
  }, []);

  useEffect(() => {
    async function getStats() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_ADMIN}/getAllUserStats`
        )
        .then((res) => {
          setStats(res.data.Data);
          console.log("RESPONSE:", res);
          console.log("INCOME:", res.data.Data.income[0].total);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getStats();
  }, []);

  return (
    <div className='main-content dashboard container-fluid'>
        <h3 className='semibold-text'>Welcome back, {adminName}<span className='ds-pink'>.</span></h3>

        <main className='main admin-cards d-flex flex-wrap justify-content-center align-items-center mt-5'>
          {/* <AdminCard /> */}
          <AdminCard
            title='Monthly Income'
            subtitle='All your income for this month'
            figure={`₦ ${currency.format(stats.income[0]?.total)}`}
          />

          <AdminCard
            title='Total Customers'
            subtitle='Customers who love Digital Superstore💓'
            figure='40'
          />

          <AdminCard
            title='Total orders'
            subtitle='Your all time orders'
            figure={`${currency.format(stats?.totalOrders)}`}
          />
          
        </main>
    </div>
  )
}

export default Dashboard