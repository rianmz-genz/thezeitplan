import React from 'react'
import Container from '../layout/Container'
import SpaceNavbar from './SpaceNavbar'
import SectionParagraph from '../molecules/SectionParagraph'
import Text from '../atoms/Text'
import WhyCard, { Features } from '../molecules/WhyCard'
import { BiCode } from 'react-icons/bi';
import { FiDatabase, FiUser } from 'react-icons/fi';
import { CiWifiOff } from 'react-icons/ci'

const WhySection = () => {
    const whyCard: Features[] = [
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
    <Container>
          <SpaceNavbar />
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
              {whyCard.map((feature) => (
                <WhyCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </aside>
        </Container>
  )
}

export default WhySection