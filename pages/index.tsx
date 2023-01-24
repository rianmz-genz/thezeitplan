import PageTemplate from "../components/layout/PageTemplate";
import Banner from "../components/organisms/Banner";
import WhySection from "../components/organisms/WhySection";
import FeaturesSection from "../components/organisms/FeaturesSection";
import PriceSection from "../components/organisms/PriceSection";
import TestimonialsSection from "../components/organisms/TestimonialsSection";
import DownloadSection from "../components/organisms/DownloadSection";
import Footer from "../components/organisms/Footer";
export default function Home() {
  return (
    <PageTemplate>
      <section
        id="banner"
        className="w-full h-fit min-h-screen justify-center bg-gradient-to-t from-[#F7FFEE] to-[#FFF4F266] pb-24"
      >
        <Banner />
      </section>
      <section className="w-full h-fit min-h-screen flex items-center justify-center">
        <WhySection />
      </section>
      <section
        id="features"
        className="w-full h-fit min-h-screen flex items-center justify-center lg:pb-8 pb-20"
      >
        <FeaturesSection />
      </section>
      <section
        id="price"
        className="w-full pb-8 h-fit min-h-screen flex justify-center bg-primaryextralight"
      >
        <PriceSection />
      </section>
      <section
        id="testimonials"
        className="w-full pb-8 h-fit min-h-screen flex justify-center bg-primarylight"
      >
        <TestimonialsSection />
      </section>
      <section
      id="download"
        className="w-full pb-8 h-fit flex justify-center"
      >
        <DownloadSection />
      </section>
      <Footer />
    </PageTemplate>
  );
}
