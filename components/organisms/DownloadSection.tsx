import React from "react";
import Container from "../layout/Container";
import SectionParagraph from "../molecules/SectionParagraph";
import SpaceNavbar from "./SpaceNavbar";
import Image from "next/image";

const DownloadSection = () => {
  return (
    <Container>
      <SpaceNavbar />
      <div className="w-full flex justify-center items-center flex-col">
        <div className="lg:w-8/12 w-full">
          <SectionParagraph
            title="Download Aplikasi Keren Ini Sekarang!"
            description="Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya."
            center
          />
          <div className="lg:w-6/12 w-full mx-auto justify-between flex space-x-3 mt-7">
          <Image
          src="/images/appstore.svg"
          width={170}
          height={170}
          alt="banner image"
        />
          <Image
          src="/images/playstore.svg"
          width={170}
          height={170}
          alt="banner image"
        />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DownloadSection;
