"use client";

import { useState } from "react";
import Image from "next/image";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { projects } from "@/data/projects";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ImagePreviewDialog from "@/components/image-preview-dialog";

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <>
      <div className="my-4 space-y-8">
        <div className="space-y-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="
                border border-primary
                bg-card
                py-2
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <CardContent className="flex items-center justify-center px-5 py-3">
                <div className="flex flex-col gap-6 lg:flex-row">
                  
                  {/* Image */}
                  <div
                    onClick={() =>
                      setSelectedImage(project.image)
                    }
                    className="
                      relative
                      h-56
                      w-full
                      cursor-pointer
                      overflow-hidden
                      rounded-xl
                      border
                      border-primary
                      lg:w-[320px]
                      lg:flex-shrink-0
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <h2 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => {
                        const Icon = tech.icon;

                        return (
                          <div
                            key={tech.name}
                            className="
                              flex items-center gap-2
                              rounded-lg
                              border border-border
                              bg-background/50
                              px-3 py-2
                              text-sm
                            "
                          >
                            <Icon size={16} />
                            <span>{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 pt-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="rounded-sm"
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
                              rounded-sm
                              bg-secondary-foreground
                            "
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ImagePreviewDialog
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}