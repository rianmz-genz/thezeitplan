import Head from "next/head";
import Image from "next/image";
import Container from "../components/layout/Container";
import PageTemplate from "../components/layout/PageTemplate";
import Text from "../components/atoms/Text";
import Button from "../components/atoms/Button";
import SectionParagraph from "../components/molecules/SectionParagraph";
import { FiDatabase, FiUser } from "react-icons/fi";
import { CiWifiOff } from "react-icons/ci";
import { BiCode } from "react-icons/bi";
import FeatureCard, {Features} from "../components/molecules/FeatureCard";
export default function Home() {
  const features: Features[] = [
    {
      icon: <FiDatabase />,
      title: "Aplikasi Gratis",
      description:
        "Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.",
    },
    {
      icon: <CiWifiOff />,
      title: "Kode OTP Error",
      description:
        "Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.",
    },
    {
      icon: <FiUser />,
      title: "Data Tidak Aman",
      description:
        "Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.",
    },
    {
      icon: <BiCode />,
      title: "Biasanya Error",
      description:
        "Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~",
    },
  ];
  return (
    <PageTemplate>
      <section
        id="banner"
        className="w-full h-fit min-h-screen justify-center bg-gradient-to-t from-[#F7FFEE] to-[#FFF4F266]"
      >
        <Container>
          {/* space for navbar because navbar is absolute */}
          <div className="h-32 w-full"></div>
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
      </section>
      <section
        id="features"
        className="w-full h-fit min-h-screen flex items-center justify-center"
      >
        <Container>
          <aside className="w-full flex justify-between">
            <div className="w-4/12 space-y-10">
              <SectionParagraph
                title="Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?"
                description="Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua."
              />
              <div className="flex w-full">
                <div className="space-y-2 w-6/12">
                  <Text
                    textStyle="InterLight"
                    value="TOTAL DON'TLOUD"
                    textColor="Gray"
                  />
                  <Text
                    textStyle="InterBold"
                    value="1,501,234"
                    textColor="JustDark"
                  />
                </div>
                <div className="space-y-2 w-6/12">
                  <Text
                    textStyle="InterLight"
                    value="TOTAL USERS"
                    textColor="Gray"
                  />
                  <Text
                    textStyle="InterBold"
                    value="1,318,829"
                    textColor="JustDark"
                  />
                </div>
              </div>
            </div>
            <div className="w-7/12 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </aside>
        </Container>
      </section>
    </PageTemplate>
  );
}
