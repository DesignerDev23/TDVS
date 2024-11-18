import { useState } from 'react'
import BusinessTable from './components/BusinessTable'
import Button from '@/components/ui/Button'
import { HiPlus } from 'react-icons/hi'
import Dialog from '@/components/ui/Dialog'
import type { MouseEvent } from 'react'
import BusinessRegistrationForm from './components/BusinessRegistrationForm'

const Business = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)

    // Function to open the dialog
    const openDialog = () => {
        setIsOpen(true)
    }

    // Function to close the dialog
    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    // Function to confirm the dialog
    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }

    return (
        <div className="min-h-screen bg-white p-4">
            {/* Business Overview Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {/* Placeholder for Business Cards */}
            </div>

            {/* Business Table Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-semibold">Registered Businesses</h2>
                    <Button variant="solid" icon={<HiPlus className="mr-2" />} onClick={openDialog}>
                        Register New Business
                    </Button>
                </div>
                <BusinessTable />
            </div>

            {/* Dialog Component */}
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className="flex flex-col h-full justify-between">
                    <h5 className="mb-4">Register New Business</h5>
                    <div className="max-h-96 overflow-y-auto">
                        <BusinessRegistrationForm />
                    </div>
                    <div className="text-right mt-6">
                        <Button className="ltr:mr-2 rtl:ml-2" variant="plain" onClick={onDialogClose}>
                            Cancel
                        </Button>
                        <Button variant="solid" onClick={onDialogOk}>
                            Register
                        </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Business
