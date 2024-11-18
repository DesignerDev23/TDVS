import React from 'react'
import Table from '@/components/ui/Table'

const { Tr, Th, Td, THead, TBody } = Table

const VerifiedBusinesses = () => {
    const businesses = [
        { id: 1, name: 'Alpha Corp', industry: 'Technology', status: 'Active' },
        { id: 2, name: 'Beta Solutions', industry: 'Finance', status: 'Pending' },
        { id: 3, name: 'Gamma LLC', industry: 'Healthcare', status: 'Active' },
    ]

    return (
        <div className="p-4 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Verified Businesses</h1>
            <Table className="shadow-md">
                <THead>
                    <Tr>
                        <Th>Business</Th>
                        <Th>Industry</Th>
                        <Th>Status</Th>
                    </Tr>
                </THead>
                <TBody>
                    {businesses.map((business) => (
                        <Tr key={business.id}>
                            <Td>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-700">
                                        {business.name.charAt(0)}
                                    </div>
                                    <span>{business.name}</span>
                                </div>
                            </Td>
                            <Td>{business.industry}</Td>
                            <Td
                                className={`${
                                    business.status === 'Active'
                                        ? 'text-green-600'
                                        : 'text-yellow-600'
                                } font-medium`}
                            >
                                {business.status}
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            </Table>
        </div>
    )
}

export default VerifiedBusinesses
