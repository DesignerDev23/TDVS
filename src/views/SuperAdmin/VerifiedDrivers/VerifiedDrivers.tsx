import React from 'react'
import Table from '@/components/ui/Table'

const { Tr, Th, Td, THead, TBody } = Table

const VerifiedDrivers = () => {
    const drivers = [
        {
            id: 1,
            name: 'John Doe',
            license: 'A123456',
            status: 'Active',
            image: null,
        },
        {
            id: 2,
            name: 'Jane Smith',
            license: 'B654321',
            status: 'Pending',
            image: null,
        },
        {
            id: 3,
            name: 'Michael Brown',
            license: 'C789012',
            status: 'Active',
            image: null,
        },
    ]

    const placeholderImage =
        'https://via.placeholder.com/40/cccccc/000000?text=+' // A simple placeholder image

    return (
        <div className="p-4 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Verified Drivers</h1>
            <Table className="shadow-md">
                <THead>
                    <Tr>
                        <Th>Driver</Th>
                        <Th>License</Th>
                        <Th>Status</Th>
                    </Tr>
                </THead>
                <TBody>
                    {drivers.map((driver) => (
                        <Tr key={driver.id}>
                            <Td>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={driver.image || placeholderImage}
                                        alt={driver.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <span>{driver.name}</span>
                                </div>
                            </Td>
                            <Td>{driver.license}</Td>
                            <Td
                                className={`${
                                    driver.status === 'Active'
                                        ? 'text-green-600'
                                        : 'text-yellow-600'
                                } font-medium`}
                            >
                                {driver.status}
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </div>
    )
}

export default VerifiedDrivers
