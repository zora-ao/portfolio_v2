"use client";

import Image from "next/image";
import { ExternalLink, Maximize2 } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { Project } from "@/types/project";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onPreview,
}: ProjectCardProps) {
  return (
    <Card className="group h-full overflow-hidden py-0 transition-colors duration-300 hover:border-brand">
      {/* Image */}
      <button
        type="button"
        onClick={() => onPreview(project)}
        aria-label={`View ${project.title} screenshot`}
        className="
          relative
          block
          aspect-video
          w-full
          overflow-hidden
          border-b
          border-border
          bg-muted/30
        "
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Category Badge */}
        <span
          className="
            absolute
            left-3
            top-3
            rounded-full
            border
            border-border
            bg-background/80
            px-2.5
            py-1
            text-xs
            font-medium
            text-foreground
            backdrop-blur
          "
        >
          {project.category}
        </span>

        {/* Expand Hint */}
        <span
          aria-hidden
          className="
            absolute
            right-3
            top-3
            grid
            h-7
            w-7
            place-items-center
            rounded-full
            border
            border-border
            bg-background/80
            text-foreground
            opacity-0
            backdrop-blur
            transition-opacity
            group-hover:opacity-100
          "
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </span>
      </button>

      <CardContent className="flex flex-1 flex-col px-5 py-5">
        {/* Title & Description */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            {project.title}
          </h2>

          <p className="text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const Icon = tech.icon;

            return (
              <span
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  bg-background
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-foreground
                "
              >
                <Icon size={13} />
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Actions (hidden when the project has no links) */}
        {(project.github || project.live) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-lg">
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
        )}
      </CardContent>
    </Card>
  );
}
