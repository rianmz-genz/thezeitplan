import React from "react";

interface TextType {
  value: string | JSX.Element;
  textColor?: "Gray" | "DarkLight" | "Primary" | "JustDark";
  textStyle:
    | "SectionDescription"
    | "SectionDescriptionSmall"
    | "SectionTitleOne"
    | "SectionTitleTwo"
    | "SectionSubtitle"
    | "CardFeatureTitle"
    | "InterLight"
    | "InterBold"
    | "FeatureTitle"
    | "PriceSubtitle"
    | "PriceTitle"
    | "Username"
    | "Review"
    | "Role"
}

const Text = ({ textStyle, value, textColor }: TextType) => {
  const getTextStyle = () => {
    switch (textStyle) {
      case "SectionDescription":
        return "font-source text-lg leading-[32px]";
      case "SectionDescriptionSmall":
        return "font-source text-sm";
      case "SectionTitleOne":
        return "font-patua text-5xl leading-[60px]"
      case "SectionTitleTwo":
        return "font-patua text-4xl leading-[48px]"
      case "CardFeatureTitle":
        return "font-source font-semibold text-xl"
      case "InterLight":
        return "font-inter text-light"
      case "InterBold":
        return "font-inter font-semibold text-2xl"
      case "FeatureTitle":
        return "font-patua text-xl"
      case "PriceSubtitle":
        return "font-ibm font-semibold text-sm"
      case "PriceTitle":
        return "font-patua text-3xl";
      case "Username":
        return "font-poppins font-semibold"
      case "Review":
        return "font-poppins leading-6"
      case "Role":
        return "font-poppins text-xs"
    }
  };
  const getTextColor = () => {
    switch (textColor) {
      case "Gray":
        return "text-justgray";
      case "DarkLight":
        return "text-darklight";
      case "Primary":
        return "text-primary";
      case "JustDark":
        return "text-justblue";
    }
  };
  return <p className={`${getTextStyle()} ${getTextColor()} `}>{value}</p>;
};

export default Text;
