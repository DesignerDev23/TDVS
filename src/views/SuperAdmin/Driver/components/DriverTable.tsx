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

type Driver = {
    name: string;
    dateOfBirth: string;
    contactNumber: string;
    address: string;
    driversLicense: string;
    currentEmployer: string;
};

type Option = {
    value: number;
    label: string;
};

const { Tr, Th, Td, THead, TBody } = Table;

// Mock data for drivers
const driverData = (): Driver[] => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            name: `Driver ${i}`,
            dateOfBirth: `198${i % 10}-0${(i % 12) + 1}-15`,
            contactNumber: `123-456-78${i}`,
            address: `Address ${i}`,
            driversLicense: `DL-${i}ABCD`,
            currentEmployer: `Company ${i % 5 + 1}`,
        });
    }
    return data;
};

const totalData = driverData().length;

const pageSizeOptions: Option[] = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
    { value: 40, label: '40 / page' },
    { value: 50, label: '50 / page' },
];

const DriverTable = () => {
    const columns = useMemo<ColumnDef<Driver>[]>(() => [
        { header: 'Name', accessorKey: 'name' },
        { header: 'Date of Birth', accessorKey: 'dateOfBirth' },
        { header: 'Contact Number', accessorKey: 'contactNumber' },
        { header: 'Address', accessorKey: 'address' },
        { header: "Driver's License", accessorKey: 'driversLicense' },
        { header: 'Current Employer', accessorKey: 'currentEmployer' },
    ], []);

    const [data] = useState(() => driverData());

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

export default DriverTable;
