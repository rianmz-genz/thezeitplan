import React from "react";
import { Features } from "./WhyCard";
import Text from "../atoms/Text";

const FeatureList = ({ icon, title, description }: Features) => {
  return (
    <li className="w-full h-fit space-y-2">
      <div className="w-full text-4xl text-primary mb-2">{icon}</div>
      <Text textStyle="FeatureTitle" value={title} />
      <Text
        textStyle="SectionDescription"
        textColor="Gray"
        value={description}
      />
    </li>
  );
};

export default FeatureList;
