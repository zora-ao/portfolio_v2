"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

import Timeline from "../timeline";

const timeline = [
  {
    year: "2024",
    title: "Started Learning Web Development",
    description:
      "Learned HTML, CSS, and JavaScript and built my first websites.",
  },
  {
    year: "2025",
    title: "Started Computer Science",
    description:
      "Began my BS Computer Science journey and strengthened my programming fundamentals.",
  },
  {
    year: "2025",
    title: "Built Full Stack Projects",
    description:
      "Created projects using React, Next.js, Flask, MongoDB, Supabase, and PostgreSQL.",
  },
  {
    year: "Future",
    title: "Aspiring Software Engineer",
    description:
      "Continuing to learn modern technologies and build impactful applications.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="space-y-8 py-6"
    >
      {/* Intro */}
      <motion.div variants={fadeUp}>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">
            About Me
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            A little about me and my journey in
            software development.
          </p>
        </div>

        <Card className="border border-strong bg-background">
          <CardContent className="px-6">
            <div className="space-y-4">
              <p className="text-sm">
                I am Carl, a Computer Science student
                passionate about building modern web
                applications and continuously improving
                my development skills.
              </p>

              <p className="text-sm">
                My primary focus is creating full-stack
                applications using modern JavaScript
                frameworks, scalable backend technologies,
                and cloud databases. I enjoy turning ideas
                into practical solutions while learning
                industry-standard tools and best practices.
              </p>

              <p className="text-sm">
                Currently, I am focused on strengthening my
                skills in Next.js, TypeScript, backend
                development, and building real-world
                projects that solve practical problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3"
      >
        <motion.div whileHover={{ y: -5 }}>
          <Card className="h-full border border-strong bg-background transition-all">
            <CardContent className="p-5">
              <Code2 className="mb-3 h-5 w-5 text-brand" />

              <h2 className="text-3xl font-bold text-foreground">
                4+
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                freeCodeCamp Certificates
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }}>
          <Card className="h-full border border-strong bg-background transition-all">
            <CardContent className="p-5">
              <FolderGit2 className="mb-3 h-5 w-5 text-brand" />

              <h2 className="text-3xl font-bold text-foreground">
                5+
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Personal Projects
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -5 }}>
          <Card className="h-full border border-strong bg-background transition-all">
            <CardContent className="p-5">
              <GraduationCap className="mb-3 h-5 w-5 text-brand" />

              <h2 className="text-3xl font-bold text-foreground">
                2025
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Started Computer Science
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={fadeUp}>
        <Timeline items={timeline} />
      </motion.div>
    </motion.div>
  );
}