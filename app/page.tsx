import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LearningJourney from "@/components/LearningJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const contactFormEnabled = Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL,
  );

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <Contact formEnabled={contactFormEnabled} />
      </main>
      <Footer />
    </>
  );
}
