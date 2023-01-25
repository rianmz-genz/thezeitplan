import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";
import SectionParagraph from "../molecules/SectionParagraph";
import Container from "../layout/Container";
import SpaceNavbar from "./SpaceNavbar";

const Banner = () => {
  return (
    <Container>
      {/* space for navbar because navbar is absolute */}
      <SpaceNavbar />
      <div className=" flex lg:flex-row flex-col-reverse items-center lg:justify-between  w-full h-fit min-h-screen">
        <aside className="lg:w-5/12 space-y-7">
          <SectionParagraph
            titleOne
            title="Sebuah cara mudah mengatur jadwal kuliah kamu"
            description="Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~"
          />
          <div className="flex lg:flex-row flex-col w-full space-y-3 lg:space-y-0 lg:space-x-5">
            <Button
              buttonStyle="ButtonPrimary"
              value="LearnMore"
              href="#features"
            />
            <Button
              buttonStyle="ButtonLight"
              value="Play Demo"
              href="#features"
            />
          </div>
        </aside>
        <Image
          src="/images/bannerIllustration.svg"
          width={300}
          height={300}
          className="lg:w-6/12 w-full"
          alt="banner image"
        />
      </div>
    </Container>
  );
};

export default Banner;
