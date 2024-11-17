// RecentTransactions.tsx
const RecentTransactions = () => {
    const transactions = [
        { id: 1, date: '2024-11-15', amount: '$150.00', status: 'Completed' },
        { id: 2, date: '2024-11-14', amount: '$320.00', status: 'Pending' },
        { id: 3, date: '2024-11-13', amount: '$450.00', status: 'Completed' },
    ];

    return (
        <div>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Amount</th>
                        <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                            <td className="px-4 py-2">{transaction.date}</td>
                            <td className="px-4 py-2">{transaction.amount}</td>
                            <td className="px-4 py-2">{transaction.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentTransactions;
