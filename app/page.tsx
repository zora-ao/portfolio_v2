"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { EASE_EXPO } from "@/lib/animations";

import ProfileCard from "@/components/profile-card";
import SkillsCard from "@/components/skills-card";
import RightContainer from "@/components/right-container";
import BottomNav from "@/components/navigation";

import { Section } from "@/types/navigation";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<Section>("profile");

  return (
    <main className="relative h-screen overflow-hidden bg-background text-foreground md:px-4 lg:px-8">
      {/* Background */}
      <DotPattern
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          fill-foreground/10
          animate-drift
          [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]
        "
      />

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 h-full lg:hidden">
        {activeSection === "profile" ? (
          <div className="mb-24 h-full overflow-y-auto px-4 scrollbar-hide">
            <div className="space-y-4">
              {[
                <ProfileCard key="profile" />,
                <SkillsCard key="skills" />,
              ].map((card, index) => (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 + index * 0.08,
                    ease: EASE_EXPO,
                  }}
                >
                  {card}
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-full">
            <RightContainer
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        )}

        {/* Floating Mobile Navigation */}
        <BottomNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          mobile
        />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden h-full lg:block">
        <div className="mx-auto h-full max-w-7xl">
          <div className="grid h-full gap-2 lg:grid-cols-[360px_1fr]">
            {/* Left Side */}
            <aside className="flex h-full flex-col justify-center gap-4 overflow-hidden scrollbar-hide">
              <div className="space-y-4">
                {[
                  <ProfileCard key="profile" />,
                  <SkillsCard key="skills" />,
                ].map((card, index) => (
                  <motion.div
                    key={card.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.08,
                      ease: EASE_EXPO,
                    }}
                  >
                    {card}
                  </motion.div>
                ))}
              </div>
            </aside>

            {/* Right Side */}
            <RightContainer
              activeSection={
                activeSection === "profile"
                  ? "about"
                  : activeSection
              }
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </div>
    </main>
  );
}