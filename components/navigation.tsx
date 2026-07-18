"use client";

import {
  User,
  PersonStanding,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";

import { Section } from "@/types/navigation";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

interface BottomNavProps {
  activeSection: Section;
  setActiveSection: React.Dispatch<
    React.SetStateAction<Section>
  >;
  mobile?: boolean;
}

const navItems = [
  {
    id: "profile" as const,
    icon: User,
    label: "Profile",
  },
  {
    id: "about" as const,
    icon: PersonStanding,
    label: "About",
  },
  {
    id: "projects" as const,
    icon: Briefcase,
    label: "Projects",
  },
  {
    id: "certificates" as const,
    icon: Award,
    label: "Certificates",
  },
  {
    id: "contact" as const,
    icon: Mail,
    label: "Contact",
  },
];

export default function BottomNav({
  activeSection,
  setActiveSection,
  mobile = false,
}: BottomNavProps) {
  const items = mobile
    ? navItems
    : navItems.filter(
        (item) => item.id !== "profile"
      );

  return (
    <nav
      className={
        mobile
          ? `
            fixed
            bottom-6
            left-1/2
            z-50
            flex
            justify-evenly
            w-3/4
            -translate-x-1/2
            items-center
            gap-6
            rounded-2xl
            border
            border-border
            bg-card/90
            px-5
            py-3
            shadow-lg
            backdrop-blur
          `
          : `
            absolute
            bg-background
            border
            border-primary
            right-4
            px-5
            py-2
            rounded-xl
            flex
            items-center
            gap-8
          `
      }
    >
      {items.map((item) => {
        const Icon = item.icon;

        const isActive =
          activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() =>
              setActiveSection(item.id)
            }
            className="
              transition-all
              duration-200
              hover:scale-110
            "
          >
            <Icon
              className={`h-5.5 w-5.5 ${
                isActive
                  ? "text-violet-500"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        );
      })}
      <AnimatedThemeToggler className="border border-primary p-2 rounded-full" />
    </nav>
  );
}