"use client";

import { Mail } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedInIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import ContactForm from "../contact-form";

export default function ContactSection() {
  return (
    <div className="space-y-8 py-6 pb-24">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">
          Contact
        </h1>

        <p className="text-sm text-muted-foreground">
          Interested in working together, discussing a project,
          or just saying hello? Feel free to reach out.
        </p>
      </div>

      <div className="flex md:flex-row-reverse flex-col justify-evenly gap-x-2 space-y-4 items-center">
      {/* Contact Cards */}
      <div className="grid gap-2 md:grid-cols-1 grid-cols-3">
        <a
          href="mailto:carljasperramos97@gmail.com"
          className="block"
        >
          <Card className="transition-colors duration-300 hover:border-brand">
            <CardContent className="flex flex-col md:flex-row md:text-left text-center items-center gap-4 md:px-5">
              <Mail className="h-5 w-5 text-foreground" />

              <div>
                <p className="font-medium text-foreground">
                  Email
                </p>

                <p className="text-sm text-foreground">
                  Contact Me
                </p>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://github.com/zora-ao"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="transition-colors duration-300 hover:border-brand">
            <CardContent className="flex flex-col md:flex-row md:text-left text-center items-center gap-4 md:px-5">
              <SiGithub className="h-5 w-5 text-foreground" />

              <div>
                <p className="font-medium text-foreground">
                  GitHub
                </p>

                <p className="text-sm text-foreground">
                  View Projects
                </p>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://linkedin.com/in/carljasperramos"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="transition-colors duration-300 hover:border-brand">
            <CardContent className="flex flex-col md:flex-row md:text-left text-center items-center gap-4 md:px-5">
              <LinkedInIcon className="h-5 w-5 text-foreground" />

              <div>
                <p className="font-medium text-foreground">
                  LinkedIn
                </p>

                <p className="text-sm text-foreground">
                  Let&apos;s Connect
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>

      {/* Contact Form */}
      <ContactForm />
      </div>
    </div>
  );
}