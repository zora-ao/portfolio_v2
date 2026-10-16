"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "./ui/card";

import { staggerChild, staggerContainer } from "@/lib/animations";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function SkillsCard() {
  return (
    <Card className="border border-strong bg-background">
      <CardContent className="px-6">
        {/* Header Title & Description */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">
            Tech Stack
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Technologies I use to build applications
          </p>
        </div>

        {/* Centered Badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-wrap gap-2.5 justify-center items-center"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={staggerChild}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-strong
                  px-3.5 py-1.5
                  text-xs font-medium text-foreground
                  transition-all
                  hover:border-brand hover:bg-brand-muted
                "
              >
                <Icon
                  size={14}
                  className="text-foreground shrink-0"
                />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </CardContent>
    </Card>
  );
}