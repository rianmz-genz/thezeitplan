import React from "react";
import Container from "../layout/Container";
import SpaceNavbar from "./SpaceNavbar";
import SectionParagraph from "../molecules/SectionParagraph";
import PriceCard, { PriceCardProps } from "../molecules/PriceCard";
import Text from "../atoms/Text";

const PriceSection = () => {
  const PriceList: PriceCardProps[] = [
    {
      subTitle: "RINDURATU",
      price: "FREE",
      description:
        "Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.",
      benefits: [
        "Jadwal Tak Terbatas",
        "Fitur Notifikasi (Kadang Telat)",
        "Mode Gelap",
        "Bisa Topup Pulsa",
        "Bisa Beli Token Listrik",
        "Data Lo Dijual",
      ],
    },
    {
      subTitle: "SULTAN",
      price: "RP 100K",
      description:
        "Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain..",
      benefits: [
        "Semua Fitur Sebelumnya",
        "Diingetin Makan",
        "Sleepcall Sampe Bobo",
        "Ditemenin Jalan Tiap Minggu",
        "Ditemenin Nonton Eksekswan",
        "Terhindar Razia Rambut",
        "Dapet Izin Bikin Ormas",
      ],
    },
    {
      subTitle: "RAFATAR",
      price: "RP 10000K",
      description:
        "Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.",
      benefits: [
        "Semua Fitur Sebelumnya",
        "Dibayarin Kuliah 4 Semester",
        "Dibayarin Cicilan Motor",
        "Dicicilin KPR 12 Tahun",
        "Magang di NASA Cab. Depok",
        "Dapet Skin Alok",
        "Nonton Film Gratis di Ganool",
        "Naik Haji Bila Mampu",
      ],
    },
  ];
  return (
    <Container>
      <SpaceNavbar />
      <div className="w-full h-fit flex items-center flex-col">
        <div className="lg:w-6/12 w-full">
          <SectionParagraph
            title="Main catur sambil bersepeda, beda harga beda fitur"
            description="Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!"
            center
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          {PriceList.map((list) => (
            <PriceCard
              key={list.price}
              price={list.price}
              description={list.description}
              subTitle={list.subTitle}
              benefits={list.benefits}
            />
          ))}
        </div>
        <div className="lg:w-6/12 w-full text-center mt-8">
            <Text textStyle="CardFeatureTitle" value="Harap Diingat:" textColor="JustDark"/>
            <Text textStyle="SectionDescription" value="Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat." textColor="Gray"/>
        </div>
      </div>
    </Container>
  );
};

export default PriceSection;
