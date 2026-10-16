"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  /*
   * Each section gets a fresh scroll position —
   * keeping the old offset mid-list feels broken.
   */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [activeSection]);

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
        rounded-2xl
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
        
          lg:flex
        "
      >

        {setActiveSection && (
          <BottomNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}

      </div>

      {/* Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeSection}
          ref={scrollRef}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
        </motion.div>
      </AnimatePresence>
    </section>
  );
}