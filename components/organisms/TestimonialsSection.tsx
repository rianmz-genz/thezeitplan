import React from "react";
import Container from "../layout/Container";
import SpaceNavbar from "./SpaceNavbar";
import SectionParagraph from "../molecules/SectionParagraph";
import ReviewCard, { ReviewProps } from "../molecules/ReviewCard";

const TestimonialsSection = () => {
  const Reviews: ReviewProps[] = [
    {
        review:
          "“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”",
        profileImage: "images/user5.svg",
        username: "Indah Cyank Dya Clmax",
        role: "Works at Looking For True Love, Inc ",
        star: "Three",
      },
      {
        review:
          "“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”",
        profileImage: "images/user3.svg",
        username: "Wahyu Hayuk",
        role: "Mahasiswa Abadi ",
        star: "One",
      },
      {
        review:
          "“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”",
        profileImage: "images/user6.svg",
        username: "Ibu Scarlet Darkening",
        role: "Ibunya Wahyu Hayuk",
        star: "Five",
      },
    {
      review:
        "“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”",
      profileImage: "images/user2.svg",
      username: "Sanusi Sulivan",
      role: "Dosen di Boating School Ny. Puff ",
      star: "Five",
    },
    
    {
      review:
        "“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”",
      profileImage: "images/user6.svg",
      username: "Jumadi RT. 03",
      role: "Ketua RT. 06",
      star: "One",
    },
    {
        review:
          "“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”",
        profileImage: "images/user7.svg",
        username: "Cucunya Megalodon",
        role: "Pecinta Kucing Hungaria",
        star: "Five",
      },
  ];
  return (
    <Container>
      <SpaceNavbar />
      <div className="w-full h-fit flex items-center flex-col">
        <div className="w-6/12">
          <SectionParagraph
            title="Apa kata umat manusia tentang aplikasi keren ini?"
            description="Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana."
            center
          />
        </div>
        <div className="w-full grid grid-cols-3 h-fit gap-4 mt-8">
          {Reviews.map((reviewItem) => (
            <ReviewCard
              review={reviewItem.review}
              star={reviewItem.star}
              username={reviewItem.username}
              role={reviewItem.role}
              profileImage={reviewItem.profileImage}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
