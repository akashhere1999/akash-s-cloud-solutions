import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBanner from "@/components/MetricsBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorGlow />
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <MetricsBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
