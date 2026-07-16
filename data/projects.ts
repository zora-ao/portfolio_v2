import { Project } from "@/types/project";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiFlask,
  SiSupabase,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

export const projects: Project[] = [
  {
    title: "CropTrack",
    category: "Full Stack",
    description:
      "Farmer crop management system for tracking crops, expenses, harvests, revenue, and farm activities.",

    image: "/projects_img/ecom_cake.png",

    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],

    github: "#",
    live: "#",
  },

  {
    title: "Guitar Shop",
    category: "Full Stack",
    description:
      "Modern guitar shop website built with React, Flask, and Supabase featuring a responsive user interface.",

    image: "/projects_img/laptop_reco.png",

    tech: [
      { name: "React", icon: SiReact },
      { name: "Flask", icon: SiFlask },
      { name: "Supabase", icon: SiSupabase },
    ],

    github: "#",
    live: "#",
  },

  {
    title: "Restaurant Website",
    category: "WordPress",
    description:
      "Practice website created using WordPress and Elementor to improve page-building and website design skills.",

    image: "/projects_img/landing_wp.webp",

    tech: [
      {
        name: "WordPress",
        icon: SiWordpress,
      },
    ],
  },
];