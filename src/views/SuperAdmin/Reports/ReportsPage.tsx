import React, { useState } from 'react';
import Card from '../Dashboard/components/Card';
import Select from '@/components/ui/Select';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';
import Chart from 'react-apexcharts'; // Using your chart implementation
import { COLOR_1 } from '@/constants/chart.constant';

const { Tr, Th, Td, THead, TBody } = Table;

const ReportsPage = () => {
    // Dummy Data for the Table
    const reportData = () => {
        const data = [];
        for (let i = 1; i <= 50; i++) {
            data.push({
                id: i,
                date: `2024-11-${i < 10 ? `0${i}` : i}`,
                description: `Transaction ${i}`,
                amount: `$${(Math.random() * 1000).toFixed(2)}`,
                status: i % 2 === 0 ? 'Completed' : 'Pending',
            });
        }
        return data;
    };

    const [data] = useState(() => reportData());
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const displayedData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page: number) => setCurrentPage(page);
    const handlePageSizeChange = (value?: number) => setPageSize(value || 10);

    // Chart Data
    const chartData = [
        {
            name: 'Revenue',
            data: [
                8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
                8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55,
                8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
            ],
        },
    ];

    const chartOptions = {
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
    };

    return (
        <div className="min-h-screen bg-white p-6 space-y-6">
            {/* Page Header */}
            <header>
                <h1 className="text-3xl font-semibold">Reports</h1>
                <p className="text-gray-600">
                    Get a comprehensive overview of your financial and operational data.
                </p>
            </header>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card title="Total Revenue">
                    <div className="text-3xl text-purple-400 font-bold">$123,456</div>
                    <p className="text-gray-600">Year to Date</p>
                </Card>
                <Card title="Pending Transactions">
                    <div className="text-3xl text-purple-400 font-bold">34</div>
                    <p className="text-gray-600">As of Today</p>
                </Card>
                <Card title="Completed Transactions">
                    <div className="text-3xl text-purple-400 font-bold">156</div>
                    <p className="text-gray-600">Year to Date</p>
                </Card>
            </div>

            {/* Chart Section */}
            <Card title="Revenue Overview">
                <Chart type="area" options={chartOptions} series={chartData} height={300} />
            </Card>

            {/* Table Section */}
            <Card title="Detailed Report">
                <div className="flex items-center space-x-4 mb-4">
                    <Select
                        options={[
                            { value: 'daily', label: 'Daily' },
                            { value: 'weekly', label: 'Weekly' },
                            { value: 'monthly', label: 'Monthly' },
                        ]}
                        placeholder="Select Report Period"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Transactions' },
                            { value: 'completed', label: 'Completed' },
                            { value: 'pending', label: 'Pending' },
                        ]}
                        placeholder="Filter by Status"
                    />
                </div>
                <Table>
                    <THead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Date</Th>
                            <Th>Description</Th>
                            <Th>Amount</Th>
                            <Th>Status</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        {displayedData.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.date}</Td>
                                <Td>{item.description}</Td>
                                <Td>{item.amount}</Td>
                                <Td>
                                    <span
                                        className={`${
                                            item.status === 'Completed'
                                                ? 'text-green-600'
                                                : 'text-yellow-600'
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </Td>
                            </Tr>
                        ))}
                    </TBody>
                </Table>
                <div className="flex items-center justify-between mt-4">
                    <Pagination
                        pageSize={pageSize}
                        currentPage={currentPage}
                        total={data.length}
                        onChange={handlePageChange}
                    />
                    <Select
                        size="sm"
                        isSearchable={false}
                        options={[
                            { value: 10, label: '10 / page' },
                            { value: 20, label: '20 / page' },
                            { value: 30, label: '30 / page' },
                        ]}
                        value={{ value: pageSize, label: `${pageSize} / page` }}
                        onChange={(option) => handlePageSizeChange(option?.value)}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ReportsPage;
