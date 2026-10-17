"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { revealDelay } from "@/lib/animations";

import { certificates } from "@/data/certificates";

import { Card, CardContent } from "@/components/ui/card";

export default function CertificatesSection() {
  return (
    <div className="space-y-8 py-6 pb-20">
      {/* Section Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">
          Certificates
        </h1>

        <p className="text-sm text-muted-foreground">
          Certificates and achievements I have earned while
          learning and developing my technical skills.
        </p>
      </div>

      {/* Certificates */}
      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.slug}
            {...revealDelay(index)}
            className="h-full"
          >
            <Link
              href={`/certificates/${certificate.slug}`}
              aria-label={`View ${certificate.name} certificate`}
              className="block h-full"
            >
              <Card
                className="
                  group
                  h-full
                  overflow-hidden
                  py-0
                  transition-colors
                  duration-300
                  hover:border-brand
                "
              >
                <CardContent className="flex flex-1 flex-col p-0">
                  {/* Certificate Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted/30">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.name} certificate`}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="
                        object-cover
                        object-top
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Issuer Badge */}
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
                      {certificate.issuer}
                    </span>

                    {/* Open Hint */}
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
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* Certificate Information */}
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold text-foreground">
                        {certificate.name}
                      </h2>

                      <p className="text-xs text-muted-foreground">
                        Issued {certificate.date}
                      </p>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {certificate.description}
                    </p>

                    {/* CTA */}
                    <span
                      className="
                        mt-auto
                        flex
                        items-center
                        gap-2
                        pt-5
                        text-sm
                        font-medium
                        text-foreground
                        transition-colors
                        group-hover:text-brand
                      "
                    >
                      View Certificate
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
