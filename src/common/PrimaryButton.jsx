import { BsCheck2 } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function PrimaryButton({
  text = "Proceed",
  onClick,
  disabled = false,
  className = "",
  textClassName = "",
  iconClassName = "",
  icon = <MdOutlineArrowOutward className="w-8 h-8" />,
  type = "button",
  noIcon = false,
  btnType = "primary",
  verified = false,
  filtered = false,
  loading = false,
  iconOnleft = false,
  children,
  ...rest
}) {
  const primaryColor = "#044F55";

  const btnIcon = loading ? (
    <LoadingOutlined />
  ) : verified ? (
    <BsCheck2 />
  ) : filtered ? (
    <BsCheck2 />
  ) : btnType === "primary" ? (
    icon
  ) : null;

  const [isHovered, setIsHovered] = useState(false);

  return btnType === "primary" ? (
    <button
      type={type}
      onClick={disabled ? () => {} : onClick}
      disabled={loading || disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center text-white font-manrope relative font-bold rounded-[10px] text-xl w-full sm:w-auto px-6 text-center h-[45px] transition-all duration-300 
        ${disabled ? "cursor-not-allowed opacity-60" : "hover:opacity-90"} 
        ${iconOnleft ? "ms-[45px]" : ""} 
        ${className}`}
      style={{
        backgroundColor: primaryColor,
      }}
      {...rest}
    >
      <div className="flex items-center justify-center gap-2 w-full">
        {children || (
          <div className={`${textClassName} text-lg whitespace-nowrap`}>
            {text}
          </div>
        )}
        {verified && noIcon && <BsCheck2 />}
      </div>

      {!noIcon && (
        <div
          className={`absolute ${
            iconOnleft ? "left-[-45px]" : "right-[-45px]"
          } my-auto mx-auto p-2 rounded-[10px] flex items-center justify-center h-[45px] w-[45px] ${iconClassName}`}
          style={{
            backgroundColor: primaryColor,
            opacity: isHovered ? 0.9 : 1,
          }}
        >
          {btnIcon}
        </div>
      )}
    </button>
  ) : (
    <button
      type={type}
      onClick={disabled ? () => {} : onClick}
      disabled={loading || disabled}
      className={`text-black ${
        filtered ? "border-[3px]" : "border-2"
      } font-manrope relative font-bold rounded-[10px] text-lg w-full sm:w-auto px-6 text-center h-[45px] transition-all duration-300 
        hover:text-white ${className}`}
      style={{
        borderColor: primaryColor,
        color: isHovered ? primaryColor : "black", // <-- change text color on hover
      }}
      {...rest}
    >
      <div className="flex items-center justify-center gap-2 w-full">
        {iconOnleft && btnIcon}
        {children || (
          <div className={`${textClassName} whitespace-nowrap`}>{text}</div>
        )}
        {!iconOnleft && btnIcon}
      </div>
    </button>
  );
}
