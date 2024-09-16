import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <div style={{ borderRight: '1px solid black', paddingRight: '20px' }}>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard/addJob">Add Job</Link>
              </li>
              <li>
                <Link to="/dashboard/stats">Stats</Link>
              </li>
              <li>
                <Link to="/dashboard/allJobs">All Jobs</Link>
              </li>
              <li>
                <Link to="/dashboard/profile">Profile</Link>
              </li>
            </ul>
          </nav>
      </div>
      <div style={{marginLeft: "50px"}}>
        <Outlet />
      </div>
      </div>
    </div>
  )
}

export default DashboardLayout