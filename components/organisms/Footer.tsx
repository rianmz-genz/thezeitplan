import React from "react";
import Navbrand from "../molecules/Navbrand";
import Text from "../atoms/Text";
import NavLink from "../molecules/NavLink";
import Container from "../layout/Container";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="w-full py-20">
      <Container>
        <div className="flex lg:flex-row flex-col space-y-4">
          <div className="lg:w-5/12 w-full lg:space- w-fully-4">
            <Navbrand />
            <Text
              textStyle="FooterText"
              value="Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin."
              textColor="Gray"
            />
            <Text
              textStyle="Copyright"
              value="COPYRIGHT (C) 2023. DEVELOP BY ADRIAN"
            />
          </div>
          <div className="lg:w-7/12 w-full flex lg:flex-row space-y-4 flex-col justify-end">
            <div className="lg:w-3/12 w-full space-y-4 flex flex-col item-center pl-3">
              <Text textStyle="FooterTitle" value="Sitemap" />
              <ul className="space-y-3">
                <NavLink target="#banner">Home</NavLink>
                <NavLink target="#features">Fitur - fitur</NavLink>
                <NavLink target="#price">Harga</NavLink>
                <NavLink target="#testimonials">Testimoni</NavLink>
                <NavLink target="#download">Download</NavLink>
              </ul>
            </div>
            <div className="lg:w-3/12 w-full space-y-4 flex flex-col item-center pl-3">
              <Text textStyle="FooterTitle" value="Partner" />
              <ul className="space-y-3">
                <Text textStyle="FooterText" value="Friv" textColor="Gray" />
                <Text
                  textStyle="FooterText"
                  value="Sevan.ru"
                  textColor="Gray"
                />
                <Text textStyle="FooterText" value="Ganool" textColor="Gray" />
                <Text
                  textStyle="FooterText"
                  value="Waptrick"
                  textColor="Gray"
                />
                <Text
                  textStyle="FooterText"
                  value="Stafaband"
                  textColor="Gray"
                />
                <Text
                  textStyle="FooterText"
                  value="MyWapBlog"
                  textColor="Gray"
                />
              </ul>
            </div>
            <div className="lg:w-5/12 w-full space-y-4 flex flex-col item-center pl-3">
              <Text textStyle="FooterTitle" value="Tetap Terhubung" />
              <Text
                textStyle="FooterText"
                value="Lihat kami pansos di sosial media berikut:"
                textColor="Gray"
              />
              <div className="flex w-full space-x-4">
                <div className="text-2xl p-3 rounded-full bg-primaryextralight text-primary">
                  <AiOutlineInstagram />
                </div>
                <div className="text-2xl p-3 rounded-full bg-primaryextralight text-primary">
                  <SlSocialFacebook />
                </div>
                <div className="text-2xl p-3 rounded-full bg-primaryextralight text-primary">
                  <CiTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
