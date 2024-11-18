import React from 'react';
import Card from './components/Card';
import RecentTransactions from './components/RecentTransactions';
import RecentActivities from './components/RecentActivities';
import Chart from 'react-apexcharts';
import Table from '@/components/ui/Table';

const { Tr, Th, Td, THead, TBody } = Table;

// Route Overview Line Chart
const RouteOverviewChart = () => {
    const data = [
        {
            name: 'Distance Covered (km)',
            data: [12, 18, 24, 35, 45, 55, 70],
        },
    ];

    return (
        <Chart
            options={{
                chart: { zoom: { enabled: false } },
                colors: ['#4CAF50'],
                stroke: { curve: 'smooth', width: 3 },
                xaxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    title: { text: 'Days of the Week' },
                },
                yaxis: { title: { text: 'Distance (km)' } },
                legend: { horizontalAlign: 'left' },
            }}
            series={data}
            type="line"
            height={300}
        />
    );
};

// Compact Upcoming Deliveries Table
const UpcomingDeliveriesTable = () => (
    <Table compact>
        <THead>
            <Tr>
                <Th>Delivery ID</Th>
                <Th>Pickup Location</Th>
                <Th>Dropoff Location</Th>
                <Th>Status</Th>
            </Tr>
        </THead>
        <TBody>
            <Tr>
                <Td>#DLV001</Td>
                <Td>Warehouse A</Td>
                <Td>Customer X</Td>
                <Td>Pending</Td>
            </Tr>
            <Tr>
                <Td>#DLV002</Td>
                <Td>Warehouse B</Td>
                <Td>Customer Y</Td>
                <Td>In Transit</Td>
            </Tr>
            <Tr>
                <Td>#DLV003</Td>
                <Td>Warehouse C</Td>
                <Td>Customer Z</Td>
                <Td>Completed</Td>
            </Tr>
        </TBody>
    </Table>
);

const Home = () => (
    <div className="min-h-screen bg-white p-6 space-y-6">
        {/* Page Header */}
        <header>
            <h1 className="text-3xl font-semibold text-gray-800">Driver Dashboard</h1>
            <p className="text-gray-600">Stay updated with your daily activities and progress.</p>
        </header>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card title="Total Earnings">
                <div className="text-2xl text-purple-400 font-bold">$2,450</div>
                <p className="text-gray-600">This Month</p>
            </Card>
            <Card title="Deliveries Completed">
                <div className="text-2xl text-blue-500 font-bold">85</div>
                <p className="text-gray-600">Year to Date</p>
            </Card>
            <Card title="Upcoming Deliveries">
                <div className="text-2xl text-yellow-500 font-bold">12</div>
                <p className="text-gray-600">Today</p>
            </Card>
            <Card title="Distance Covered">
                <div className="text-2xl text-purple-500 font-bold">1,200 km</div>
                <p className="text-gray-600">This Month</p>
            </Card>
        </div>

        {/* Charts and Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card title="Route Overview" className="sm:col-span-2">
                <RouteOverviewChart />
            </Card>
            <Card title="Earnings Breakdown">
                <Chart
                    type="pie"
                    series={[50, 30, 20]}
                    options={{
                        labels: ['Completed', 'Pending', 'Cancelled'],
                        colors: ['#4CAF50', '#FFC107', '#F44336'],
                        legend: { position: 'bottom' },
                    }}
                />
            </Card>
        </div>

        {/* Recent Activities and Upcoming Deliveries */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card title="Recent Activities">
                <RecentActivities />
            </Card>
            <Card title="Upcoming Deliveries" className="sm:col-span-2">
                <UpcomingDeliveriesTable />
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

export default Home;
