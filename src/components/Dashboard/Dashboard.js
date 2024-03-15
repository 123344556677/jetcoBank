import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import './Dashboard.css'
import LineChart from 'components/Chart/LineChart'
import { lineChartData } from 'mock-data/ChartsData'
import DashboardCards from './DashboardCards'
import { dashboardCardData } from 'mock-data/Data'

const Dashboard = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
    <DashboardCards cardData={dashboardCardData}/>
    <div className="card-container dashboard-chart-card-wrapper">
    <div className='line-chart-wrapper ml-5 p-3'style={{width:"790px"}} >
    <LineChart chartData={lineChartData} component="Dashboard"/>
    </div>
    <Card className='dashboard-card-user ml-4  mb-3' style={{marginTop:"6%"}}>hannan</Card>
  </div>
    </div>
  )
}

export default Dashboard