"use client";

import BottomNav from "./navigation";

import AboutSection from "./sections/about-section";
import ProjectsSection from "./sections/projects-section";
import CertificatesSection from "./sections/certificates-section";
import ContactSection from "./sections/contact-section";

import { Section } from "@/types/navigation";

interface RightContainerProps {
  activeSection?: Section;
  setActiveSection?: React.Dispatch<
    React.SetStateAction<Section>
  >;
}

export default function RightContainer({
  activeSection = "about",
  setActiveSection,
}: RightContainerProps) {
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
        return <AboutSection />;
    }
  };

  return (
    <section
      className="
        flex
        h-full
        min-h-0
        flex-col
        rounded-3xl
        md:border
        md:border-primary
        md:bg-background
        relative
      "
    >
      {/* Desktop Header */}
      <div
        className="
          hidden
          shrink-0
          items-center
          justify-between
          border-border
          px-6
          py-4
          lg:flex
        "
      >
        <h2 className="text-xl font-semibold capitalize text-foreground">
          {activeSection}
        </h2>

        {setActiveSection && (
          <BottomNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}

      </div>

      {/* Content */}
      <div
        key={activeSection}
        className="
          min-h-0
          flex-1
          overflow-y-auto
          scrollbar-hide
          px-6
          py-0
        "
      >
        {renderContent()}
      </div>
    </section>
  );
}