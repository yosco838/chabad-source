import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhoWeHelp } from "@/components/who-we-help";
import { Services } from "@/components/services";
import { Approach } from "@/components/approach";
import { Process } from "@/components/process";
import { CaseStudies } from "@/components/case-studies";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhoWeHelp />
        <Services />
        <Approach />
        <Process />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
