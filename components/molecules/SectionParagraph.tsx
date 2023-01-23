import React from "react";
import Text from "../atoms/Text";
interface ParagraphProps {
  title: string;
  description: string;
  center?: boolean;
  titleOne?: boolean;
}

const SectionParagraph = ({
  title,
  description,
  center,
  titleOne,
}: ParagraphProps) => {
  return (
    <div className={`${center ? "text-center" : ""} space-y-5`}>
      {titleOne ? (
        <Text textStyle="SectionTitleOne" value={title} textColor="JustDark" />
      ) : (
        <Text textStyle="SectionTitleTwo" value={title} textColor="JustDark" />
      )}
      <Text
        textStyle="SectionDescription"
        value={description}
        textColor="Gray"
      />
    </div>
  );
};

export default SectionParagraph;
