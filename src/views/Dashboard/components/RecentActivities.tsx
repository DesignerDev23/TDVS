// RecentActivities.tsx
const RecentActivities = () => {
    const activities = [
        'Order #1234 was shipped.',
        'New customer registered: John Doe.',
        'Order #1235 completed.',
    ];

    return (
        <ul className="list-disc pl-5">
            {activities.map((activity, index) => (
                <li key={index} className="mb-2">{activity}</li>
            ))}
        </ul>
    );
};

export default RecentActivities;
