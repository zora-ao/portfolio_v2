"use client";

import { useState } from "react";

import ProfileCard from "@/components/profile-card";
import SkillsCard from "@/components/skills-card";
import SocialsCard from "@/components/socials-cards";
import RightContainer from "@/components/right-container";
import BottomNav from "@/components/navigation";

import { Section } from "@/types/navigation";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<Section>("profile");

  return (
    <main className="h-screen overflow-hidden bg-background md:px-4 md:py-4 lg:px-8">
      {/* ================= MOBILE ================= */}
      <div className="h-full lg:hidden">
        {activeSection === "profile" ? (
          <div className="h-full overflow-y-auto pb-24 scrollbar-hide px-4">
            <div className="space-y-4">
              <ProfileCard />
              <SkillsCard />
              <SocialsCard />
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
      <div className="hidden h-full lg:block">
        <div className="mx-auto h-full max-w-7xl">
          <div className="grid h-full gap-8 lg:grid-cols-[430px_1fr]">
            {/* Left Side */}
            <aside className="h-full overflow-y-auto pr-2 scrollbar-hide">
              <div className="space-y-4">
                <ProfileCard />
                <SkillsCard />
                <SocialsCard />
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