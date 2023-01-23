import React from "react";
import Text from "../atoms/Text";
interface Features {
  icon: JSX.Element;
  title: string;
  description: string;
}
const WhyCard = ({ icon, title, description }: Features) => {
  return (
    <div className="w-full h-fit p-6 bg-primaryextralight space-y-4 rounded-lg hover:border border-primarylight hover:-translate-y-2 transition-all duration-1000">
      <div className="flex space-x-3 items-center">
        <div className="bg-primarylight p-2 rounded-sm text-2xl text-primary">
          {icon}
        </div>
        <Text textStyle="CardFeatureTitle" value={title} />
      </div>
      <Text textStyle="SectionDescription" value={description} />
    </div>
  );
};

export default WhyCard;
export type { Features };
