import React from 'react'
import Card from './components/Card'
import RecentTransactions from './components/RecentTransactions'
import RecentActivities from './components/RecentActivities'
import OrdersTable from './components/OrdersTable'
import Chart from 'react-apexcharts'
import { COLOR_1 } from '@/constants/chart.constant'

const BasicArea = () => {
    const data = [
        {
            name: 'STOCK ABC',
            data: [
                8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
                8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55,
                8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
            ],
        },
    ]

    return (
        <Chart
            options={{
                chart: {
                    zoom: {
                        enabled: false,
                    },
                },
                colors: [COLOR_1],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 80, 100],
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                labels: [
                    '13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017',
                    '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017',
                    '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017',
                    '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017',
                ],
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: true,
                },
                legend: {
                    horizontalAlign: 'left',
                },
            }}
            type="area"
            series={data}
            height={300}
        />
    )
}

const Home = () => {
    return (
        <div className="min-h-screen bg-white p-2">

            {/* Dashboard Overview (Grid Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <Card title="Total Sales">
                    <div className="text-3xl font-bold">$12,340</div>
                    <p className="text-gray-600">This Month</p>
                </Card>
                <Card title="Active Orders">
                    <div className="text-3xl font-bold">32</div>
                    <p className="text-gray-600">Orders Pending</p>
                </Card>
                <Card title="Completed Orders">
                    <div className="text-3xl font-bold">128</div>
                    <p className="text-gray-600">This Month</p>
                </Card>
                <Card title="Total Customers">
                    <div className="text-3xl font-bold">2,340</div>
                    <p className="text-gray-600">Registered</p>
                </Card>
            </div>

            {/* Row for Sales Overview Chart and Recent Transactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Sales Overview Chart */}
                <Card title="Sales Overview">
                    <BasicArea />
                </Card>

                {/* Recent Transactions Card */}
                <Card title="Recent Transactions">
                    <RecentTransactions />
                </Card>
            </div>

            {/* Recent Activities */}
            <div className="mb-6">
                <Card title="Recent Activities">
                    <RecentActivities />
                </Card>
            </div>

            {/* Orders Table (Active and Completed Orders) */}
            <div className="mb-6">
                <Card title="Orders">
                    <OrdersTable />
                </Card>
            </div>

        </div>
    )
}

export default Home
