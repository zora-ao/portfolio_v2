"use client";

import Image from "next/image";
import { Link2 } from "lucide-react";

import { certificates } from "@/data/certificates";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useState } from "react";

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certificates)[number] | null>(null);

  return (
    <>
      <div className="space-y-6 my-4">

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <Card
              key={certificate.name}
              onClick={() =>
                setSelectedCertificate(certificate)
              }
              className="
                cursor-pointer
                border
                border-primary
                bg-card
                transition-all
              "
            >
              <CardContent className="px-4 text-center">
                <div className="space-y-4">
                  <div className="overflow-hidden border border-border">
                    <Image
                      src={certificate.image}
                      alt={certificate.name}
                      width={600}
                      height={400}
                      className="
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                      "
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {certificate.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedCertificate}
        onOpenChange={() =>
          setSelectedCertificate(null)
        }
      >
        <DialogContent className="max-w-4xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="flex w-3/4 text-center mx-auto">
                  {selectedCertificate.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  width={1200}
                  height={800}
                  className="
                    w-full
                    border
                    border-border
                  "
                />

                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">
                      Issuer:
                    </span>{" "}
                    {selectedCertificate.issuer}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Date Earned:
                    </span>{" "}
                    {selectedCertificate.date}
                  </p>
                </div>

                <p className="text-muted-foreground">
                  {selectedCertificate.description}
                </p>

                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Link2 className="mr-2 h-4 w-4" />
                    View Credential
                  </Button>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}