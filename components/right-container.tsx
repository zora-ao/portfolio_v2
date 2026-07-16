"use client";

import { useState } from "react";

import BottomNav from "./navigation";

import HomeSection from "./sections/projects-section";
import CertificatesSection from "./sections/certificates-section";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import { Section } from "@/types/navigation";
import ProjectsSection from "./sections/projects-section";


export default function RightContainer() {
  const [activeSection, setActiveSection] =
    useState<Section>("about");

  const renderContent = () => {
    switch (activeSection) {

      case "about":
        return <AboutSection />;

      case "projects":
        return <ProjectsSection />;

      case "certificates":
        return <CertificatesSection />;

      case "contact":
        return <ContactSection />;

      default:
        return <HomeSection />;
    }
  };

  return (
    <section className="flex h-full min-h-0 flex-col rounded-3xl border border-primary bg-background px-6 ">
      <div className="flex justify-between items-center my-2 mx-4">
        <h2 className="text-xl text-foreground">
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