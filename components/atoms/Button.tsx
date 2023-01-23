import Link from "next/link";
import React from "react";
interface ButtonProps {
  href: string;
  value: string | JSX.Element;
  buttonStyle:
    | "ButtonDownloadPrimary"
    | "ButtonPrimary"
    | "ButtonLight"
    | "ButtonPrice";
}
const Button = ({ href, value, buttonStyle }: ButtonProps) => {
  const getButtonStyle = () => {
    switch (buttonStyle) {
      case "ButtonDownloadPrimary":
        return "px-7 py-2 bg-primary text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primarylight";
      case "ButtonPrimary":
        return "px-12 py-3 bg-primary text-white rounded-lg shadow-xl shadow-primarylight";
      case "ButtonLight":
        return "px-12 py-3 bg-primarylight text-primary rounded-lg border border-primarylight";
      case "ButtonPrice":
        return "w-full bg-primary hover:shadow-xl hover:shadow-primarylight transition-all duration-300 text-white rounded-lg flex items-center justify-center py-3";
    }
  };
  return (
    <a className={`${getButtonStyle()}`} href={href}>
      {value}
    </a>
  );
};

export default Button;
