"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import { revealDelay } from "@/lib/animations";

import { certificates } from "@/data/certificates";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CertificatesSection() {
  return (
    <div className="space-y-8 py-6">
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
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.div key={certificate.name} {...revealDelay(index)}>
            <Card
              className="
              overflow-hidden
              border
              border-strong
              bg-background/50
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              backdrop-blur-sm
              py-0
            "
          >
            <CardContent className="p-0">
              {/* Certificate Image */}
              <div className="overflow-hidden border-b border-border">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  width={600}
                  height={400}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Certificate Information */}
              <div className="space-y-4 p-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-foreground">
                    {certificate.name}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Earned: {certificate.date}
                  </p>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {certificate.description}
                </p>

                {/* View Certificate */}
                <Link
                  href={`/certificates/${certificate.slug}`}
                >
                  <Button
                    variant="outline"
                    className="rounded-lg border-strong"
                  >
                    View Certificate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}