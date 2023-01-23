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
      <div className=" flex items-center justify-between w-full h-fit min-h-screen">
        <aside className="w-5/12 space-y-7">
          <SectionParagraph
            titleOne
            title="Sebuah cara mudah mengatur jadwal kuliah kamu"
            description="Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~"
          />
          <div className="flex w-full space-x-5">
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
          className="w-6/12"
          alt="banner image"
        />
      </div>
    </Container>
  );
};

export default Banner;
