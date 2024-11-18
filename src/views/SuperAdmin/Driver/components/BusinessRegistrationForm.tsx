import { useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Checkbox from '@/components/ui/Checkbox'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    businessName: Yup.string().required('Business Name is required'),
    registeredAddress: Yup.string().required('Registered Address is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    ownerFullName: Yup.string().required('Owner’s Full Name is required'),
    ownerContactInfo: Yup.string().required('Owner Contact Information is required'),
    position: Yup.string().required('Position is required'),
    taxIdentificationNumber: Yup.string().required('Tax Identification Number is required'),
    businessRegistrationNumber: Yup.string().required('Business Registration Number is required'),
    relevantLicenses: Yup.string().required('Relevant Licenses are required'),
    insuranceDetails: Yup.string().required('Insurance Details are required'),
})

const BusinessRegistrationForm = () => {
    const [pwInputType, setPwInputType] = useState('password')

    const onPasswordVisibleClick = (e: MouseEvent) => {
        e.preventDefault()
        setPwInputType(pwInputType === 'password' ? 'text' : 'password')
    }

    return (
        <div>
            <Formik
                initialValues={{
                    businessName: '',
                    registeredAddress: '',
                    contactNumber: '',
                    email: '',
                    ownerFullName: '',
                    ownerContactInfo: '',
                    position: '',
                    taxIdentificationNumber: '',
                    businessRegistrationNumber: '',
                    relevantLicenses: '',
                    insuranceDetails: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm()
                    }, 400)
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            {/* Business Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <FormItem
                                    label="Business Name"
                                    invalid={errors.businessName && touched.businessName}
                                    errorMessage={errors.businessName}
                                >
                                    <Field
                                        type="text"
                                        name="businessName"
                                        placeholder="Business Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Registered Address"
                                    invalid={errors.registeredAddress && touched.registeredAddress}
                                    errorMessage={errors.registeredAddress}
                                >
                                    <Field
                                        type="text"
                                        name="registeredAddress"
                                        placeholder="Registered Address"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Contact Number"
                                    invalid={errors.contactNumber && touched.contactNumber}
                                    errorMessage={errors.contactNumber}
                                >
                                    <Field
                                        type="text"
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Email"
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                >
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Owner Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormItem
                                    label="Owner’s Full Name"
                                    invalid={errors.ownerFullName && touched.ownerFullName}
                                    errorMessage={errors.ownerFullName}
                                >
                                    <Field
                                        type="text"
                                        name="ownerFullName"
                                        placeholder="Owner’s Full Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Owner Contact Information"
                                    invalid={errors.ownerContactInfo && touched.ownerContactInfo}
                                    errorMessage={errors.ownerContactInfo}
                                >
                                    <Field
                                        type="text"
                                        name="ownerContactInfo"
                                        placeholder="Owner Contact Information"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Position"
                                    invalid={errors.position && touched.position}
                                    errorMessage={errors.position}
                                >
                                    <Field
                                        type="text"
                                        name="position"
                                        placeholder="Position"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Company Identification */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormItem
                                    label="Tax Identification Number"
                                    invalid={errors.taxIdentificationNumber && touched.taxIdentificationNumber}
                                    errorMessage={errors.taxIdentificationNumber}
                                >
                                    <Field
                                        type="text"
                                        name="taxIdentificationNumber"
                                        placeholder="Tax Identification Number"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Business Registration Number"
                                    invalid={errors.businessRegistrationNumber && touched.businessRegistrationNumber}
                                    errorMessage={errors.businessRegistrationNumber}
                                >
                                    <Field
                                        type="text"
                                        name="businessRegistrationNumber"
                                        placeholder="Business Registration Number"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* License & Certification Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormItem
                                    label="Relevant Licenses"
                                    invalid={errors.relevantLicenses && touched.relevantLicenses}
                                    errorMessage={errors.relevantLicenses}
                                >
                                    <Field
                                        type="text"
                                        name="relevantLicenses"
                                        placeholder="Relevant Licenses"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Insurance Details"
                                    invalid={errors.insuranceDetails && touched.insuranceDetails}
                                    errorMessage={errors.insuranceDetails}
                                >
                                    <Field
                                        type="text"
                                        name="insuranceDetails"
                                        placeholder="Insurance Details"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Submit and Reset Buttons */}
                            <FormItem>
                                <Button
                                    type="reset"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={() => resetForm()}
                                >
                                    Reset
                                </Button>
                                <Button variant="solid" type="submit">
                                    Register Business
                                </Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BusinessRegistrationForm
