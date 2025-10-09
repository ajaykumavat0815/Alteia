import { useState } from "react";
import { Button, Layout } from "antd";
import FormInput from "../common/FormInput";
import DashboardHeader from "../common/DashboardHeader";
import PrimaryButton from "../common/PrimaryButton";

const AddNewCustomer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    investmentStatus: "",
    country: "",
    nationality: "",
    email: "",
    address: "",
    identityDocument: null,
    proofOfAddress: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (file, fileType) => {
    setFormData((prev) => ({ ...prev, [fileType]: file }));
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
  };

  return (
    <Layout id="dashboardLayout" className="!bg-white">
      <div className="pl-5 ml-5 pt-2 mt-0">
        <DashboardHeader
          title="Add New Customer"
          subtitle="Fill in the details below to register a new customer and initiate KYC verification."
          reverseOrder={true}
        />
      </div>
      <div className="  rounded-lg p-8 font-sans p-5 m-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
            <FormInput
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="Enter email address"
            />
            <FormInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel"
              required
              placeholder="Enter phone number"
            />
            <FormInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter residential or mailing address"
            />
            <FormInput
              label="Initial Investment Status"
              name="investmentStatus"
              value={formData.investmentStatus}
              onChange={handleChange}
              type="select"
              required
              options={[
                { label: "Beginner", value: "beginner" },
                { label: "Intermediate", value: "intermediate" },
                { label: "Advanced", value: "advanced" },
                { label: "Expert", value: "expert" },
              ]}
            />
            <FormInput
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              placeholder="Enter your Nationality"
            />
            <FormInput
              label="Country of residence"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="Enter your country of residence"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Identity Document"
              name="identityDocument"
              type="upload"
              value={formData.identityDocument}
              onFileUpload={handleFileUpload}
              uploadDescription="Upload proof of address (e.g., utility bill)"
              required
            />
            <FormInput
              label="Proof of Address"
              name="proofOfAddress"
              type="upload"
              value={formData.proofOfAddress}
              onFileUpload={handleFileUpload}
              uploadDescription="Upload identity proof (e.g., Valid Passport, ID card, passport)"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 gap-4">
            <PrimaryButton
              text="Cancel"
              btnType="secondary"
              onClick={handleCancel}
              noIcon={true}
              textClassName="!text-sm "
            />

            <PrimaryButton
              text="Save"
              noIcon={true}
              textClassName="!text-sm text-white"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddNewCustomer;
