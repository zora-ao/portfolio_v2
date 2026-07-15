"use client";

import { useState } from "react";

import BottomNav from "./navigation";

import HomeSection from "./sections/home-section";
import CertificatesSection from "./sections/certificates-section";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import { Section } from "@/types/navigation";


export default function RightContainer() {
  const [activeSection, setActiveSection] =
    useState<Section>("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;

      case "about":
        return <AboutSection />;

      case "certificates":
        return <CertificatesSection />;

      case "contact":
        return <ContactSection />;

      default:
        return <HomeSection />;
    }
  };

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-zinc-700 bg-zinc-900 px-6 ">
      <div className="flex justify-between items-center my-2 mx-4">
        <h2 className="text-xl text-white">
          {activeSection.toUpperCase()}
        </h2>
        <BottomNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hide">
        {renderContent()}
      </div>

    </section>
  );
}