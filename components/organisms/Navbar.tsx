import React, { useEffect, useState } from "react";
import Container from "../layout/Container";
import Navbrand from "../molecules/Navbrand";
import NavLink from "../molecules/NavLink";
import Button from "../atoms/Button";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
    <nav
      className={`w-full h-fit mt-6 ${isScrolled ? "fixed" : "absolute"} z-30 `}
    >
      <Container>
        <ul
          className={`${
            isScrolled ? "shadow-xl shadow-primaryextralight" : ""
          } rounded-lg w-full h-fit bg-white  px-8 py-5 flex lg:flex-row flex-col lg:space-y-0 lg:justify-between space-y-3 lg:items-center`}
        >
          <div className="w-full lg:w-3/12 flex justify-between">
          <Navbrand />
          <button className="text-xl lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu /> }
          </button>
          </div>
          <div className={`flex lg:flex-row flex-col lg:space-x-10 space-y-2 lg:items-center ${isOpen ? "" : "lg:flex hidden"}`}>
            <NavLink target="#banner" children="Home" />
            <NavLink target="#features" children="Fitur - fitur" />
            <NavLink target="#price" children="Harga" />
            <NavLink target="#testimonials" children="Testimoni" />
            <Button
              href="#download"
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
