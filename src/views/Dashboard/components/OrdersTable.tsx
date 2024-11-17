// OrdersTable.tsx
const OrdersTable = () => {
    const orders = [
        { id: 1, customer: 'John Doe', status: 'Active', total: '$120.00' },
        { id: 2, customer: 'Jane Smith', status: 'Completed', total: '$320.00' },
        { id: 3, customer: 'Bob Johnson', status: 'Active', total: '$150.00' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2 text-left">Customer</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b">
                            <td className="px-4 py-2">{order.customer}</td>
                            <td className="px-4 py-2">{order.status}</td>
                            <td className="px-4 py-2">{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
