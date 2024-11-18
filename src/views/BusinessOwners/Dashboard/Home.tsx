import React from 'react';
import Card from './components/Card';
import RecentTransactions from './components/RecentTransactions';
import RecentActivities from './components/RecentActivities';
import Chart from 'react-apexcharts';
import { COLOR_1, COLOR_2, COLOR_3 } from '@/constants/chart.constant';
import Table from '@/components/ui/Table';

const { Tr, Th, Td, THead, TBody } = Table;

// Revenue Area Chart Component
const RevenueAreaChart = () => {
    const data = [
        {
            name: 'Revenue',
            data: [
                8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
                8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55,
                8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
            ],
        },
    ];

    return (
        <Chart
            options={{
                chart: { zoom: { enabled: false } },
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
                dataLabels: { enabled: false },
                stroke: { curve: 'smooth', width: 3 },
                labels: [
                    '13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017',
                    '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017',
                    '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017',
                    '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017',
                ],
                xaxis: { type: 'datetime' },
                yaxis: { opposite: true },
                legend: { horizontalAlign: 'left' },
            }}
            type="area"
            series={data}
            height={300}
        />
    );
};

// Compact Table for Recent Orders
const RecentOrdersTable = () => (
    <Table compact>
        <THead>
            <Tr>
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Status</Th>
                <Th>Total</Th>
            </Tr>
        </THead>
        <TBody>
            <Tr>
                <Td>#12345</Td>
                <Td>John Doe</Td>
                <Td>Completed</Td>
                <Td>$120.00</Td>
            </Tr>
            <Tr>
                <Td>#12346</Td>
                <Td>Jane Smith</Td>
                <Td>Pending</Td>
                <Td>$75.00</Td>
            </Tr>
            <Tr>
                <Td>#12347</Td>
                <Td>Michael Brown</Td>
                <Td>Cancelled</Td>
                <Td>$0.00</Td>
            </Tr>
        </TBody>
    </Table>
);

const Home = () => (
    <div className="min-h-screen bg-white p-6 space-y-6">
        {/* Page Header */}
        <header>
            <h1 className="text-2xl font-semibold text-gray-800">Business Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's an overview of your business.</p>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card title="Total Revenue">
                <div className="text-2xl text-purple-400 font-bold">$150,000</div>
                <p className="text-gray-600">Year to Date</p>
            </Card>
            <Card title="Monthly Revenue">
                <div className="text-2xl text-purple-400 font-bold">$50,240</div>
                <p className="text-gray-600">October 2024</p>
            </Card>
            <Card title="Total Customers">
                <div className="text-2xl text-purple-400 font-bold">2,340</div>
                <p className="text-gray-600">Registered</p>
            </Card>
        </div>

        {/* Charts and Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card title="Revenue Overview" className="sm:col-span-2">
                <RevenueAreaChart />
            </Card>
            <Card title="Expenses Breakdown">
                <Chart
                    type="donut"
                    series={[40, 25, 15, 20]}
                    options={{
                        labels: ['Marketing', 'Operations', 'Technology', 'Other'],
                        colors: [COLOR_1, COLOR_2, COLOR_3, '#FFD700'],
                        legend: { position: 'bottom' },
                    }}
                />
            </Card>
        </div>

        {/* Recent Transactions and Orders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card title="Recent Transactions" className="sm:col-span-2">
                <RecentTransactions />
            </Card>
            <Card title="Recent Orders" className="sm:col-span-1">
                <RecentOrdersTable />
            </Card>
        </div>

        {/* Activities and Customer Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card title="Recent Activities">
                <RecentActivities />
            </Card>
            <Card title="Top Customers" className="sm:col-span-2">
                <Table>
                    <THead>
                        <Tr>
                            <Th>Customer Name</Th>
                            <Th>Email</Th>
                            <Th>Total Spent</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Td>John Doe</Td>
                            <Td>john.doe@example.com</Td>
                            <Td>$10,000</Td>
                        </Tr>
                        <Tr>
                            <Td>Jane Smith</Td>
                            <Td>jane.smith@example.com</Td>
                            <Td>$7,500</Td>
                        </Tr>
                        <Tr>
                            <Td>Michael Brown</Td>
                            <Td>michael.brown@example.com</Td>
                            <Td>$5,000</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Card>
        </div>
    </div>
);

export default Home;
