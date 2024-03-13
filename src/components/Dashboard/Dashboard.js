import React from 'react'
import { Col, Row } from 'reactstrap'
import './Dashboard.css'
import LineChart from 'components/Chart/LineChart'
import { lineChartData } from 'mock-data/ChartsData'

const Dashboard = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
    <Row className='w-100 '>
    <Col xl={8}>
    <div className='line-chart-wrapper ml-lg-2 mrl-lg-2 p-3'>
    <LineChart chartData={lineChartData} component="Dashboard"/>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Dashboard