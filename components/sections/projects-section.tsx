"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { revealDelay } from "@/lib/animations";

import { projects } from "@/data/projects";
import { Project } from "@/types/project";

import ProjectCard from "@/components/project-card";
import ImagePreviewDialog from "@/components/image-preview-dialog";

export default function ProjectsSection() {
  const [selected, setSelected] =
    useState<Project | null>(null);

  return (
    <>
      <div className="space-y-8 py-6 pb-20">
        {/* Section Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">
            Projects
          </h1>

          <p className="text-sm text-muted-foreground">
            A collection of projects I have built.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...revealDelay(index)}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onPreview={setSelected}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Preview */}
      <ImagePreviewDialog
        image={selected?.image ?? null}
        title={selected?.title}
        category={selected?.category}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
