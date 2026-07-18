"use client";

import {
  Mail,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import ContactForm from "../contact-form";

export default function ContactSection() {
  return (
    <div className="space-y-6 md:p-0 pb-24">
      {/* Header */}
      <div>
        <p className="mt-4 max-w-full border border-primary text-foreground bg-background p-4 rounded-xl">
          Interested in working together, discussing a project,
          or just saying hello? Feel free to reach out.
        </p>
      </div>

      <div className="flex md:flex-row-reverse flex-col justify-evenly gap-x-2 space-y-4 items-center">
      {/* Contact Cards */}
      <div className="grid gap-2 md:grid-cols-1 grid-cols-3">
        <a
          href="mailto:youremail@example.com"
          className="block"
        >
          <Card className="border border-primary bg-background transition-all hover:border-violet-500">
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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="border-primary border bg-background transition-all hover:border-violet-500">
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
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="border-primary border bg-background transition-all hover:border-violet-500">
            <CardContent className="flex flex-col md:flex-row md:text-left text-center items-center gap-4 md:px-5">
              <SiLinkerd className="h-5 w-5 text-foreground" />

              <div>
                <p className="font-medium text-foreground">
                  LinkedIn
                </p>

                <p className="text-sm texforeground">
                  Let's Connect
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