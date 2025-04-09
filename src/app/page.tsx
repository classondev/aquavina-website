import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import DestinationCategories from "@/components/DestinationCategories";
import PopularDestinations from "@/components/PopularDestinations";
import ClimateProtection from "@/components/ClimateProtection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DestinationCategories />
      <PopularDestinations />
      <ClimateProtection />
      <Testimonials />
      <Footer />
    </main>
  );
}
