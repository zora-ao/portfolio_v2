"use client";

import { useState } from "react";

import BottomNav from "./navigation";

import HomeSection from "./sections/home-section";
import CertificatesSection from "./sections/certificates-section";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";


type Section =
  | "home"
  | "about"
  | "certificates"
  | "contact";

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
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-zinc-700 bg-zinc-900 p-6">

      <BottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hide">
        {renderContent()}
      </div>

    </section>
  );
}