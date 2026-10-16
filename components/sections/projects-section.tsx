"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { revealDelay } from "@/lib/animations";

import { projects } from "@/data/projects";

import { Button } from "@/components/ui/button";

import ImagePreviewDialog from "@/components/image-preview-dialog";

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

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
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...revealDelay(index)}
              className="
                flex
                flex-col
                gap-6
                border-b
                border-border
                pb-10
                last:border-0
                lg:flex-row
              "
            >
              {/* Image */}
              <div
                onClick={() =>
                  setSelectedImage(project.image)
                }
                className="
                  relative
                  h-56
                  w-full
                  shrink-0
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  lg:h-[210px]
                  lg:w-[320px]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                {/* Title & Description */}
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>

                  <p className="text-sm leading-6 text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-border
                          bg-card
                          px-3
                          py-1.5
                          text-sm
                          text-foreground
                        "
                      >
                        <Icon size={15} />
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="rounded-lg"
                      >
                        <SiGithub size={16} />
                        <span>Code</span>
                      </Button>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="
                          rounded-lg
                          border-transparent
                          bg-brand
                          text-brand-foreground
                          hover:bg-brand-600
                          active:scale-[0.97]
                        "
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Preview */}
      <ImagePreviewDialog
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}