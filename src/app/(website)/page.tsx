import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import ContactPage from "./contact/page";
import PlansSlider from "@/components/PlansSlider";
import CurveTop from "@/components/CurveTop";
import CurveBottom from "@/components/CurveBottom";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10">
        <HeroSection />
        <CurveBottom fill="#6D8E4E" />
      </section>

      {/* Testimonios con curva arriba */}
      <section className="relative">
        <Testimonials />
      </section>

      {/* Planes */}
      <section className="relative">
        <CurveTop fill="#6D8E4E" />
        <PlansSlider />
      </section>

      {/* Contacto */}
      <section className="relative">
        <CurveBottom fill="#6D8E4E" />
        <ContactPage />
      </section>
    </main>
  );
}
