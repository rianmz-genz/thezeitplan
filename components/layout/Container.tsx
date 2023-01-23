import React, { FC, ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="lg:w-11/12 px-5 w-full container mx-auto">{children}</div>;
};

export default Container;
