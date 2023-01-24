import React, { FC, ReactNode, useEffect, useState } from "react";
interface NavLinkProps {
  target: string;
  children: ReactNode | string;
}
const NavLink: FC<NavLinkProps> = ({ target, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const headerHeight = 92;
  useEffect(() => {
    const targetElement = document.querySelector<HTMLElement>(target);
    if (targetElement) {
      if (target === "#banner") {
        setIsActive(true);
      }
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + headerHeight >
            targetElement.offsetTop - headerHeight &&
          window.scrollY <
            targetElement.offsetTop +
              targetElement.clientHeight -
              headerHeight - 24
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }
  }, [target]);
  return (
    <li>
      <a
        itemProp="url"
        href={target}
        className={` text-lg font-source ${
          isActive ? "font-semibold text-primary" : "opacity-80"
        } hover:text-primary duration-300 transition-all`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
