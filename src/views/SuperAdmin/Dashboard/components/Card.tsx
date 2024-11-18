// Card.tsx
interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ title, children, className }: CardProps) => (
    <div className={`bg-white p-6 rounded-lg mb-4 shadow-md ${className}`}>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {children}
    </div>
);

export default Card;
