import React from "react";
import SectionParagraph from "../molecules/SectionParagraph";
import FeatureList from "../molecules/FeatureList";
import Image from "next/image";
import SpaceNavbar from "./SpaceNavbar";
import Container from "../layout/Container";
import { Features } from "../molecules/WhyCard";
import { BsCloudSlash, BsCameraVideo, BsBell } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const FeaturesSection = () => {
    const features: Features[] = [
        {
          icon: <BsCloudSlash />,
          title: "Tidak Tersimpan Otomatis",
          description:
            "Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.",
        },
        {
          icon: <BsCameraVideo />,
          title: "Si Rizal Gak Pernah Ngonten",
          description:
            "Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.",
        },
        {
          icon: <RiDeleteBin6Line />,
          title: "Terhapus Otomatis",
          description:
            "Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.",
        },
        {
          icon: <BsBell />,
          title: "Nggak Tau Lagi Gw",
          description:
            "Mikir teks buat konten susah bro, ini aja ngasal masih susah!",
        },
      ];
  return (
    <Container>
      <SpaceNavbar />
      <div className="w-full flex lg:flex-row flex-col h-fit min-h-screen justify-around items-center">
        <Image
          src="/images/featureIllustration.svg"
          width={300}
          height={300}
          className="lg:w-5/12 w-full"
          alt="banner image"
        />
        <div className="lg:w-6/12 w-full space-y-6">
          <SectionParagraph
            title="Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~"
            description="Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!"
          />
          <ul className="w-full h-fit grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <FeatureList
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
