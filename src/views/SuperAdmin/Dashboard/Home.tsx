import React from 'react';
import Card from './components/Card';
import RecentTransactions from './components/RecentTransactions';
import RecentActivities from './components/RecentActivities';
import Chart from 'react-apexcharts';
import { COLOR_1, COLOR_2, COLOR_3 } from '@/constants/chart.constant';
import Table from '@/components/ui/Table';

const { Tr, Th, Td, THead, TBody } = Table;

// User Growth Line Chart
const UserGrowthChart = () => {
    const data = [
        {
            name: 'User Growth',
            data: [
                8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
                8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55,
                8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
            ],
        },
    ];

    const BasicArea = () => {
        const data = [
            {
                name: 'Revenue',
                data: [
                    8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
                    8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55,
                    8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
                ],
            },
        ]
    
 
    }

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
    );
};

// Compact System Logs Table
const SystemLogsTable = () => (
    <Table compact>
        <THead>
            <Tr>
                <Th>Log ID</Th>
                <Th>Action</Th>
                <Th>User</Th>
                <Th>Date</Th>
            </Tr>
        </THead>
        <TBody>
            <Tr>
                <Td>#LOG001</Td>
                <Td>Added New User</Td>
                <Td>Admin</Td>
                <Td>2024-11-01</Td>
            </Tr>
            <Tr>
                <Td>#LOG002</Td>
                <Td>Deleted Order</Td>
                <Td>Super Admin</Td>
                <Td>2024-11-03</Td>
            </Tr>
            <Tr>
                <Td>#LOG003</Td>
                <Td>Updated System Settings</Td>
                <Td>Admin</Td>
                <Td>2024-11-10</Td>
            </Tr>
        </TBody>
    </Table>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 space-y-6">
            {/* Page Header */}
            <header>
                <h1 className="text-3xl font-semibold text-gray-800">Super Admin Dashboard</h1>
                <p className="text-gray-600">Monitor and manage the system's performance and data.</p>
            </header>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <Card title="Total Revenue">
                    <div className="text-2xl text-purple-400 font-bold">$500,240</div>
                    <p className="text-gray-600">This Year</p>
                </Card>
                <Card title="Active Users">
                    <div className="text-2xl text-purple-400 font-bold">12,450</div>
                    <p className="text-gray-600">Online Now</p>
                </Card>
                <Card title="Total Transactions">
                    <div className="text-2xl text-purple-400 font-bold">34,580</div>
                    <p className="text-gray-600">Year to Date</p>
                </Card>
                <Card title="System Uptime">
                    <div className="text-2xl text-purple-400 font-bold">99.98%</div>
                    <p className="text-gray-600">Last 30 Days</p>
                </Card>
            </div>

            {/* Charts and Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card title="User Growth" className="sm:col-span-2">
                    <UserGrowthChart />
                </Card>
                <Card title="Revenue Breakdown">
                    <Chart
                        type="pie"
                        series={[60, 25, 15]}
                        options={{
                            labels: ['Product Sales', 'Subscriptions', 'Other'],
                            colors: [COLOR_1, COLOR_2, COLOR_3],
                            legend: { position: 'bottom' },
                        }}
                    />
                </Card>
            </div>

            {/* Recent Activities and System Logs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card title="Recent Activities">
                    <RecentActivities />
                </Card>
                <Card title="System Logs" className="sm:col-span-2">
                    <SystemLogsTable />
                </Card>
            </div>

            {/* Recent Transactions */}
            <div className="grid grid-cols-1">
                <Card title="Recent Transactions">
                    <RecentTransactions />
                </Card>
            </div>
        </div>
    );
};

export default Home;
