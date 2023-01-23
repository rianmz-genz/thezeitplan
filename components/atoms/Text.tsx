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
