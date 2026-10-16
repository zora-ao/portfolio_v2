"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  User,
  PersonStanding,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";

import { Section } from "@/types/navigation";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useTheme } from "next-themes";

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
  const [isScrolling, setIsScrolling] =
    useState(false);

  const [isScrollingUp, setIsScrollingUp] =
    useState(false);

  /*
   * Single theme owner: next-themes.
   * The toggler only animates + notifies; persistence
   * and the DOM class stay in one place.
   */
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let lastScrollPosition = 0;

    let scrollTimeout: ReturnType<
      typeof setTimeout
    >;

    const handleScroll = (event: Event) => {
      const target = event.target;

      let currentScrollPosition = 0;

      /*
       * Check if the window/document is scrolling
       */
      if (target === document) {
        currentScrollPosition = window.scrollY;
      }

      /*
       * Check if an inner container is scrolling
       */
      else if (target instanceof HTMLElement) {
        currentScrollPosition = target.scrollTop;
      }

      /*
       * Ignore anything else
       */
      else {
        return;
      }

      /*
       * Ignore very small movements
       */
      if (
        Math.abs(
          currentScrollPosition -
            lastScrollPosition
        ) < 5
      ) {
        return;
      }

      /*
       * Detect scroll direction
       */
      if (
        currentScrollPosition >
        lastScrollPosition
      ) {
        // Scrolling DOWN
        setIsScrollingUp(false);
      } else {
        // Scrolling UP
        setIsScrollingUp(true);
      }

      /*
       * Save current position
       */
      lastScrollPosition =
        currentScrollPosition;

      /*
       * User is currently scrolling
       */
      setIsScrolling(true);

      /*
       * Reset the timer
       */
      clearTimeout(scrollTimeout);

      /*
       * Show navigation after scrolling stops
       */
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    /*
     * Capture scroll events from:
     *
     * - window
     * - document
     * - nested scrollable containers
     */
    document.addEventListener(
      "scroll",
      handleScroll,
      true
    );

    return () => {
      document.removeEventListener(
        "scroll",
        handleScroll,
        true
      );

      clearTimeout(scrollTimeout);
    };
  }, []);

  /*
   * Desktop doesn't need the Profile button
   */
  const items = mobile
    ? navItems
    : navItems.filter(
        (item) => item.id !== "profile"
      );

  /*
   * Navigation animation
   */
  let animationClass = "";

  if (mobile) {
    /*
     * MOBILE
     *
     * Scrolling:
     * hide + move down
     *
     * Stopped:
     * show + move back
     */
    animationClass = isScrolling
      ? "opacity-0 pointer-events-none translate-y-4"
      : "opacity-100 pointer-events-auto translate-y-0";
  } else {
    /*
     * DESKTOP
     *
     * Scrolling DOWN:
     * move UP and hide
     *
     * Scrolling UP:
     * move DOWN and show
     */
    animationClass =
      isScrolling && !isScrollingUp
        ? "opacity-0 pointer-events-none -translate-y-20"
        : "opacity-100 pointer-events-auto translate-y-0";
  }

  return (
    <nav
      className={`
        z-50

        transition-all
        duration-300
        ease-in-out

        ${animationClass}

        ${
          mobile
            ? `
              fixed
              bottom-6
              left-1/2
              flex
              w-3/4
              -translate-x-1/2
              items-center
              justify-evenly
              gap-6
              rounded-2xl
              border
              border-border
              bg-card/90
              px-5
              py-3
              backdrop-blur
            `
            : `
              absolute
              top-2
              right-6
              flex
              items-center
              gap-8
              rounded-2xl
              border
              border-border
              bg-card
              px-5
              py-2
            `
        }
      `}
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
            aria-label={item.label}
            className="
              relative
              transition-all
              duration-200
              hover:scale-110
            "
          >
            {isActive && (
              <motion.span
                layoutId={
                  mobile
                    ? "nav-pill-mobile"
                    : "nav-pill-desktop"
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="
                  absolute
                  -inset-2
                  rounded-full
                  bg-brand-muted
                "
              />
            )}
            <Icon
              className={`
                relative
                h-5.5
                w-5.5
                ${
                  isActive
                    ? "text-brand"
                    : "text-muted-foreground"
                }
              `}
            />
          </button>
        );
      })}

      <AnimatedThemeToggler
        theme={theme === "light" ? "light" : "dark"}
        onThemeChange={setTheme}
          className="
          rounded-full
          border
          border-border
          p-2
          transition-colors
          hover:border-brand
          hover:text-brand
        "
      />
    </nav>
  );
}