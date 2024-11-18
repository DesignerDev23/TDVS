import { useState } from 'react';
import { FormItem, FormContainer } from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    address: Yup.string().required('Address is required'),
    driversLicense: Yup.string().required("Driver's License Number is required"),
    idNumber: Yup.string().required('National ID or Passport Number is required'),
    issuanceDate: Yup.date().required('Issuance Date is required'),
    expiryDate: Yup.date().required('Expiry Date is required'),
    currentEmployer: Yup.string().required('Current Employer is required'),
    previousEmployers: Yup.string(),
    specialLicenses: Yup.string(),
    safetyTraining: Yup.string(),
    offenseRecord: Yup.string(),
    recentPhoto: Yup.mixed().required('Recent Photograph is required'),
    scannedId: Yup.mixed().required('Scanned ID is required'),
});

const AddDriverForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    contactNumber: '',
                    address: '',
                    driversLicense: '',
                    idNumber: '',
                    issuanceDate: '',
                    expiryDate: '',
                    currentEmployer: '',
                    previousEmployers: '',
                    specialLicenses: '',
                    safetyTraining: '',
                    offenseRecord: '',
                    recentPhoto: null,
                    scannedId: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        resetForm();
                    }, 400);
                }}
            >
                {({ touched, errors, setFieldValue }) => (
                    <Form>
                        <FormContainer>
                            {/* Personal Information */}
                            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem
                                    label="Name"
                                    invalid={errors.name && touched.name}
                                    errorMessage={errors.name}
                                >
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Date of Birth"
                                    invalid={errors.dateOfBirth && touched.dateOfBirth}
                                    errorMessage={errors.dateOfBirth}
                                >
                                    <Field
                                        type="date"
                                        name="dateOfBirth"
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
                                    label="Address"
                                    invalid={errors.address && touched.address}
                                    errorMessage={errors.address}
                                >
                                    <Field
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Identification Details */}
                            <h3 className="text-lg font-semibold mt-6 mb-4">Identification Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem
                                    label="Driver's License Number"
                                    invalid={errors.driversLicense && touched.driversLicense}
                                    errorMessage={errors.driversLicense}
                                >
                                    <Field
                                        type="text"
                                        name="driversLicense"
                                        placeholder="Driver's License Number"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="National ID or Passport Number"
                                    invalid={errors.idNumber && touched.idNumber}
                                    errorMessage={errors.idNumber}
                                >
                                    <Field
                                        type="text"
                                        name="idNumber"
                                        placeholder="National ID or Passport Number"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Issuance Date"
                                    invalid={errors.issuanceDate && touched.issuanceDate}
                                    errorMessage={errors.issuanceDate}
                                >
                                    <Field
                                        type="date"
                                        name="issuanceDate"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Expiry Date"
                                    invalid={errors.expiryDate && touched.expiryDate}
                                    errorMessage={errors.expiryDate}
                                >
                                    <Field
                                        type="date"
                                        name="expiryDate"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Employment History */}
                            <h3 className="text-lg font-semibold mt-6 mb-4">Employment History</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem
                                    label="Current Employer"
                                    invalid={errors.currentEmployer && touched.currentEmployer}
                                    errorMessage={errors.currentEmployer}
                                >
                                    <Field
                                        type="text"
                                        name="currentEmployer"
                                        placeholder="Current Employer"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Previous Employers (Optional)"
                                    invalid={errors.previousEmployers && touched.previousEmployers}
                                    errorMessage={errors.previousEmployers}
                                >
                                    <Field
                                        type="text"
                                        name="previousEmployers"
                                        placeholder="Previous Employers"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Certification & Training */}
                            <h3 className="text-lg font-semibold mt-6 mb-4">Certification & Training</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem
                                    label="Special Licenses or Certifications"
                                    invalid={errors.specialLicenses && touched.specialLicenses}
                                    errorMessage={errors.specialLicenses}
                                >
                                    <Field
                                        type="text"
                                        name="specialLicenses"
                                        placeholder="Special Licenses or Certifications"
                                        component={Input}
                                    />
                                </FormItem>
                                <FormItem
                                    label="Safety or Skills Training Completed"
                                    invalid={errors.safetyTraining && touched.safetyTraining}
                                    errorMessage={errors.safetyTraining}
                                >
                                    <Field
                                        type="text"
                                        name="safetyTraining"
                                        placeholder="Safety or Skills Training Completed"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>

                            {/* Offense Record */}
                            <h3 className="text-lg font-semibold mt-6 mb-4">Offense Record</h3>
                            <FormItem
                                label="Any Past Violations or Offenses (Optional)"
                                invalid={errors.offenseRecord && touched.offenseRecord}
                                errorMessage={errors.offenseRecord}
                            >
                                <Field
                                    type="text"
                                    name="offenseRecord"
                                    placeholder="Details of Offense"
                                    component={Input}
                                />
                            </FormItem>

                            {/* Photo Upload */}
                            <h3 className="text-lg font-semibold mt-6 mb-4">Photo Upload</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem
                                    label="Recent Photograph"
                                    invalid={errors.recentPhoto && touched.recentPhoto}
                                    errorMessage={errors.recentPhoto}
                                >
                                    <Input
                                        type="file"
                                        name="recentPhoto"
                                        onChange={(event) =>
                                            setFieldValue('recentPhoto', event.currentTarget.files[0])
                                        }
                                    />
                                </FormItem>
                                <FormItem
                                    label="Scanned ID Copies"
                                    invalid={errors.scannedId && touched.scannedId}
                                    errorMessage={errors.scannedId}
                                >
                                    <Input
                                        type="file"
                                        name="scannedId"
                                        onChange={(event) =>
                                            setFieldValue('scannedId', event.currentTarget.files[0])
                                        }
                                    />
                                </FormItem>
                            </div>

                            {/* Submit Button */}
                            <FormItem className="mt-6">
                                <Button variant="solid" type="submit">
                                    Add Driver
                                </Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddDriverForm;
