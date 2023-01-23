import React, { FC } from "react";
import Text from "../atoms/Text";
import { BsCheck } from "react-icons/bs";
import Button from "../atoms/Button";
interface PriceCardProps {
  subTitle: string;
  price: string;
  description: string;
  benefits: string[];
}
const PriceCard: FC<PriceCardProps> = ({
  subTitle,
  price,
  description,
  benefits,
}) => {
  return (
    <div className="w-full h-fit px-8 py-9 space-y-4 bg-white hover:shadow-md transition-all duration-300 rounded-lg">
      <Text textStyle="PriceSubtitle" value={subTitle} textColor="Primary" />
      <Text textStyle="PriceTitle" value={price} textColor="JustDark" />
      <Text
        textStyle="SectionDescription"
        value={description}
        textColor="Gray"
      />
      <ul className="w-full space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex space-x-3">
            <div className="bg-checkbg text-xl rounded-full text-justgreen flex p-1 items-center">
              <BsCheck />
            </div>
            <Text textStyle="SectionDescription" value={benefit} />
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-center">
        <Button buttonStyle="ButtonPrice" value="Download" href="#" />
      </div>
    </div>
  );
};

export default PriceCard;
export type { PriceCardProps };
