import BusinessRegistrationForm from "./components/AddDriverForm";

const AddDriver = () => {
    const handleFormSubmit = (values: any) => {
        // Replace this with your API call or logic to handle the submitted form values
        console.log('Business registered:', values);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Register New Driver</h1>
            <p className="mb-6">
                Enter the details below to register a new Driver in the system.
            </p>
            <div className="bg-white p-6 shadow rounded-md">
                <BusinessRegistrationForm />
            </div>
        </div>
    );
};

export default AddDriver;
