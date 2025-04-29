import React from "react";
import HeroSection from "@/src/components/HeroSection";
import Solutions from "@/src/components/Solutions";
import WhoWeAre from "@/src/components/WhoWeAre";
import MissionAndChallenge from "@/src/components/MissionAndChallenge";
import Experience from "@/src/components/Experience";
import FAQs from "@/src/components/FAQs";
import Form from "@/src/components/Form";
import Footer from "@/src/components/Footer";


export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Solutions />
      <WhoWeAre />
      <MissionAndChallenge />
      <Experience />
      <FAQs />
      <Form />
      <Footer />
    </React.Fragment>
  );
}
