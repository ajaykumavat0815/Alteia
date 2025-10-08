import { useState } from "react";
import { Layout } from "antd";
import FormInput from "../common/FormInput";
import DashboardHeader from "../common/DashboardHeader";
import PrimaryButton from "../common/PrimaryButton";

const AddNewTrade = () => {
  const [formData, setFormData] = useState({
    tradeBanner: null,
    tradeTitle: "",
    roi: "",
    location: "",
    minimumInvestment: "",
    aum: "",
    category: "",
    duration: "",
    status: "",
    navPerUnit: "",
    documents: null,
  });

  // Define options for select fields
  const categoryOptions = [
    { label: "Real Estate", value: "real_estate" },
    { label: "Energy", value: "energy" },
    { label: "Technology", value: "technology" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Finance", value: "finance" },
    { label: "Infrastructure", value: "infrastructure" },
  ];

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Pending", value: "pending" },
    { label: "Closed", value: "closed" },
    { label: "Draft", value: "draft" },
  ];

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
          title="Add New Trade"
          subtitle="Fill in the details below to create or update an investment opportunity. Ensure all information is accurate before saving."
          reverseOrder={true}
        />
      </div>
      <div className="rounded-lg p-8 font-sans p-5 m-5">
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormInput
            label="Upload Trade Banner"
            name="tradeBanner"
            type="upload"
            value={formData.tradeBanner}
            onFileUpload={(file) => handleFileUpload(file, "tradeBanner")}
            uploadDescription="Upload trade banner image (JPG, PNG, max 5MB)"
          />
          {/* </div> */}

          {/* Trade Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Trade Title"
              name="tradeTitle"
              value={formData.tradeTitle}
              onChange={handleChange}
              required
              placeholder="Enter fund or trade name"
            />
            <FormInput
              label="ROI %"
              name="roi"
              value={formData.roi}
              onChange={handleChange}
              required
              placeholder="Enter expected annual ROI (e.g., 8.5)"
            />
            <FormInput
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter or select location (e.g., UAE)"
            />
            <FormInput
              label="Minimum Investment"
              name="minimumInvestment"
              value={formData.minimumInvestment}
              onChange={handleChange}
              required
              placeholder="Enter minimum investment amount (e.g., 100000)"
            />
            <FormInput
              label="AUM (Assets Under Management)"
              name="aum"
              value={formData.aum}
              onChange={handleChange}
              placeholder="Enter current AUM (e.g., 32.87M)"
            />
            <FormInput
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              type="select"
              required
              options={categoryOptions}
              placeholder="Select category (e.g., Real Estate, Energy)"
            />
            <FormInput
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="Investment term length (e.g., 12 months)"
            />
            <FormInput
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              type="select"
              required
              options={statusOptions}
              placeholder="Choose status"
            />
            <FormInput
              label="NAV/Unit"
              name="navPerUnit"
              value={formData.navPerUnit}
              onChange={handleChange}
              placeholder="Enter Net Asset Value per unit (e.g., 1237.18)"
            />
            {/* Documents Upload Section */}

            <FormInput
              label="Documents Upload"
              name="documents"
              type="upload"
              value={formData.documents}
              onFileUpload={(file) => handleFileUpload(file, "documents")}
              uploadDescription="Upload fact sheets, PDFs, supporting documents"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 ">
            <PrimaryButton
              text="Cancel"
              btnType="secondary"
              onClick={handleCancel}
              noIcon={true}
            />
            <PrimaryButton text="Save" type="submit" noIcon={true} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddNewTrade;
