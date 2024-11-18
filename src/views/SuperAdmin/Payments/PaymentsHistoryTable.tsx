import React, { useState, useMemo } from 'react';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';
import Select from '@/components/ui/Select';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type PaymentHistory = {
    payerName: string;
    amount: number;
    paymentDate: string;
    paymentMethod: string;
    status: string;
    reference: string;
};

type Option = {
    value: number;
    label: string;
};

const { Tr, Th, Td, THead, TBody } = Table;

const paymentsHistoryData = (): PaymentHistory[] => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            payerName: `Payer ${i}`,
            amount: Math.floor(Math.random() * 2000) + 50,
            paymentDate: `2024-10-${i % 30 + 1}`,
            paymentMethod: i % 2 === 0 ? 'PayPal' : 'Credit Card',
            status: i % 3 === 0 ? 'Failed' : 'Completed',
            reference: `HISREF${2000 + i}`,
        });
    }
    return data;
};

const totalData = paymentsHistoryData().length;

const pageSizeOptions: Option[] = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
];

const PaymentsHistoryTable = () => {
    const columns = useMemo<ColumnDef<PaymentHistory>[]>(() => [
        { header: 'Payer Name', accessorKey: 'payerName' },
        { header: 'Amount ($)', accessorKey: 'amount' },
        { header: 'Payment Date', accessorKey: 'paymentDate' },
        { header: 'Payment Method', accessorKey: 'paymentMethod' },
        { header: 'Status', accessorKey: 'status' },
        { header: 'Reference', accessorKey: 'reference' },
    ], []);

    const [data] = useState(() => paymentsHistoryData());

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handlePageChange = (page: number) => {
        table.setPageIndex(page - 1);
    };

    const handlePageSizeChange = (value?: number) => {
        table.setPageSize(value || 10);
    };

    return (
        <div>
             <header className="mb-6">
                <h1 className="text-2xl font-semibold">Payments History</h1>
                <p className="text-gray-600">
                    Review completed payment records, including statuses and methods.
                </p>
            </header>
            <Table>
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Th key={header.id} colSpan={header.colSpan}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </TBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <Pagination
                    pageSize={table.getState().pagination.pageSize}
                    currentPage={table.getState().pagination.pageIndex + 1}
                    total={totalData}
                    onChange={handlePageChange}
                />
                <div style={{ minWidth: 130 }}>
                    <Select<Option>
                        size="sm"
                        isSearchable={false}
                        value={pageSizeOptions.find(
                            (option) =>
                                option.value ===
                                table.getState().pagination.pageSize
                        )}
                        options={pageSizeOptions}
                        onChange={(option) =>
                            handlePageSizeChange(option?.value)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentsHistoryTable;
