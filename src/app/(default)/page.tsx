import FloxifyLogo from "@/public/floxify-logo.png"
import fff from "../../../public/floxify-logo.png"


export const metadata: Metadata = {
  title: "Floxify - home",
  description: "GenAI platform",
  icons : {
    icon : "/floxify-logo.png",
  }
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import FooterText from "@/components/footer-text";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
      <Footer/>
      <FooterText/>
    </>
  );
}
