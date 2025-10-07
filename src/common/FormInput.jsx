import { Upload as AntUpload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// import uploadBg from "./assets/images/Upload.png";
// import uploadIcon from "./assets/icons/Upload-icon.png";

import uploadBg from "../assets/images/Upload.png";
import uploadIcon from "../assets/images/UplaodIcon.png";

const FormInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  options = [],
  placeholder = "",
  onFileUpload,
  labelFontSize = "14px", // default in px
  labelColor = "#044f55", // default color
  backgroundColor = "#f4f4f4", // input background color
}) => {
  const uploadButton = (
    <div className="flex flex-col items-center justify-center text-gray-600">
      <UploadOutlined className="text-green-500 text-2xl" />
      <div className="mt-2 text-sm font-medium">Upload</div>
    </div>
  );

  const labelStyle = {
    fontSize: labelFontSize,
    color: labelColor,
    fontWeight: 600,
    marginBottom: "0.5rem",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem 0.75rem",
    borderRadius: "0.375rem",
    border: "1px solid #ccc",
    color: "#111827",
    backgroundColor: backgroundColor,
    outline: "none",
  };

  // SELECT FIELD
  if (type === "select") {
    return (
      <div className="flex flex-col">
        <label style={labelStyle}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={inputStyle}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // FILE UPLOAD FIELD
  // if (type === "upload") {
  //   return (
  //     <div>
  //       <label style={labelStyle}>
  //         {label} {required && <span style={{ color: "red" }}>*</span>}
  //       </label>
  //       <div
  //         style={{
  //           border: "1px solid #ccc",
  //           borderRadius: "0.5rem",
  //           padding: "1rem",
  //           background: backgroundColor,
  //         }}
  //       >
  //         <AntUpload
  //           listType="picture-card"
  //           showUploadList={false}
  //           beforeUpload={(file) => onFileUpload(file, name)}
  //           accept=".jpg,.jpeg,.png,.pdf"
  //         >
  //           {value ? (
  //             <div className="text-center">
  //               <div className="text-green-600 font-medium">✓ Uploaded</div>
  //               <div className="text-xs text-gray-500 mt-1">{value.name}</div>
  //             </div>
  //           ) : (
  //             uploadButton
  //           )}
  //         </AntUpload>
  //         <p
  //           style={{
  //             fontSize: "12px",
  //             color: "#6B7280",
  //             marginTop: "0.5rem",
  //             textAlign: "center",
  //           }}
  //         >
  //           Upload {label.toLowerCase()} (e.g., valid passport, ID card, utility
  //           bill)
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (type === "upload") {
  //   return (
  //     <div>
  //       <label style={labelStyle}>
  //         {label} {required && <span style={{ color: "red" }}>*</span>}
  //       </label>
  //       <div
  //         style={{
  //           border: "1px solid #ccc",
  //           borderRadius: "0.5rem",
  //           padding: "1rem",
  //           backgroundImage: `url("src/assets/images/Upload.png")`,
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //           backgroundRepeat: "no-repeat",
  //           minHeight: "200px",
  //         }}
  //       >
  //         <AntUpload
  //           listType="picture-card"
  //           showUploadList={false}
  //           beforeUpload={(file) => onFileUpload(file, name)}
  //           accept=".jpg,.jpeg,.png,.pdf"
  //         >
  //           {value ? (
  //             <div className="text-center">
  //               <div className="text-green-600 font-medium">✓ Uploaded</div>
  //               <div className="text-xs text-gray-500 mt-1">{value.name}</div>
  //             </div>
  //           ) : (
  //             uploadButton
  //           )}
  //         </AntUpload>
  //         <p
  //           style={{
  //             fontSize: "12px",
  //             color: "#6B7280",
  //             marginTop: "0.5rem",
  //             textAlign: "center",
  //           }}
  //         >
  //           Upload {label.toLowerCase()} (e.g., valid passport, ID card, utility
  //           bill)
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  if (type === "upload") {
    return (
      <div>
        <label style={labelStyle}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            padding: "1rem",
            backgroundImage: `url(${uploadBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Semi-transparent overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "0.5rem",
              zIndex: 1,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <AntUpload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={(file) => onFileUpload(file, name)}
              accept=".jpg,.jpeg,.png,.pdf"
            >
              {value ? (
                <div className="text-center">
                  <div className="text-green-600 font-medium">✓ Uploaded</div>
                  <div className="text-xs text-gray-500 mt-1">{value.name}</div>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <img
                    src={uploadIcon}
                    alt="Upload"
                    style={{
                      width: "48px",
                      height: "48px",
                      marginBottom: "12px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  {/* <div style={{ fontWeight: "500", marginBottom: "4px" }}>
                    Click to upload
                  </div> */}
                  {/* <div style={{ fontSize: "12px", color: "#6B7280" }}>
                    or drag and drop
                  </div> */}
                </div>
              )}
            </AntUpload>
            <p
              style={{
                fontSize: "12px",
                color: "#6B7280",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              Upload {label.toLowerCase()} (e.g., valid passport, ID card,
              utility bill)
            </p>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT INPUT FIELD
  return (
    <div className="flex flex-col">
      <label style={labelStyle}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

export default FormInput;
