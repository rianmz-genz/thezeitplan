import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Navbrand from "../molecules/Navbrand";
import NavLink from "../molecules/NavLink";
import Button from "../atoms/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <nav className={`w-full h-fit mt-6 ${isScrolled ? "fixed" : "absolute"} `}>
      <Container>
        <ul
          className={`${
            isScrolled ? "shadow-xl shadow-primaryextralight" : ""
          } rounded-lg w-full h-fit bg-white  px-8 py-5 flex justify-between items-center`}
        >
          <Navbrand />
          <div className="flex space-x-10 items-center">
            <NavLink target="#banner" children="Home" />
            <NavLink target="#features" children="Fitur - fitur" />
            <NavLink target="#price" children="Harga" />
            <NavLink target="#testimonials" children="Testimoni" />
            <Button
              href="/download"
              buttonStyle="ButtonDownloadPrimary"
              value="Download ->"
            />
          </div>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
