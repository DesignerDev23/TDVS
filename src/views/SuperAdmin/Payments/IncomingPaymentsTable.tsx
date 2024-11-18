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

type IncomingPayment = {
    payerName: string;
    amount: number;
    dueDate: string;
    paymentMethod: string;
    reference: string;
};

type Option = {
    value: number;
    label: string;
};

const { Tr, Th, Td, THead, TBody } = Table;

const incomingPaymentsData = (): IncomingPayment[] => {
    const data = [];
    for (let i = 1; i <= 50; i++) {
        data.push({
            payerName: `Payer ${i}`,
            amount: Math.floor(Math.random() * 1000) + 50,
            dueDate: `2024-11-${i % 30 + 1}`,
            paymentMethod: i % 2 === 0 ? 'Bank Transfer' : 'Credit Card',
            reference: `REF${1000 + i}`,
        });
    }
    return data;
};

const totalData = incomingPaymentsData().length;

const pageSizeOptions: Option[] = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
];

const IncomingPaymentsTable = () => {
    const columns = useMemo<ColumnDef<IncomingPayment>[]>(() => [
        { header: 'Payer Name', accessorKey: 'payerName' },
        { header: 'Amount ($)', accessorKey: 'amount' },
        { header: 'Due Date', accessorKey: 'dueDate' },
        { header: 'Payment Method', accessorKey: 'paymentMethod' },
        { header: 'Reference', accessorKey: 'reference' },
    ], []);

    const [data] = useState(() => incomingPaymentsData());

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
                <h1 className="text-2xl font-semibold">Incoming Payments</h1>
                <p className="text-gray-600">
                    View and manage all pending payments that are due.
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

export default IncomingPaymentsTable;
