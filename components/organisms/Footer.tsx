import React from "react";
import Navbrand from "../molecules/Navbrand";
import Text from "../atoms/Text";
import NavLink from "../molecules/NavLink";
import Container from "../layout/Container";
import {AiOutlineInstagram} from "react-icons/ai"
import {SlSocialFacebook} from "react-icons/sl"
import {CiTwitter} from "react-icons/ci"
const Footer = () => {
  return (
    <footer className="w-full py-20">
      <Container>
        <div className="flex">
          <div className="w-5/12 space-y-4">
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
          <div className="w-7/12 flex justify-end">
            <div className="w-3/12 space-y-4 flex flex-col item-center pl-3">
              <Text textStyle="FooterTitle" value="Sitemap" />
              <ul className="space-y-3">
                <NavLink target="#banner" children="Home" />
                <NavLink target="#features" children="Fitur - fitur" />
                <NavLink target="#price" children="Harga" />
                <NavLink target="#testimonials" children="Testimoni" />
                <NavLink target="#download" children="Download" />
              </ul>
            </div>
            <div className="w-3/12 space-y-4 flex flex-col item-center pl-3">
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
            <div className="w-5/12 space-y-4 flex flex-col item-center pl-3">
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
