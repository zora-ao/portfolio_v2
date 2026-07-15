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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="mt-4 max-w-2xl text-zinc-400 bg-zinc-800 p-4 rounded-xl">
          Interested in working together, discussing a project,
          or just saying hello? Feel free to reach out.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <a
          href="mailto:youremail@example.com"
          className="block"
        >
          <Card className="border-zinc-700 bg-zinc-800 transition-all hover:border-violet-500">
            <CardContent className="flex items-center gap-4 p-5">
              <Mail className="h-5 w-5 text-violet-400" />

              <div>
                <p className="font-medium text-white">
                  Email
                </p>

                <p className="text-sm text-zinc-400">
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
          <Card className="border-zinc-700 bg-zinc-800 transition-all hover:border-violet-500">
            <CardContent className="flex items-center gap-4 p-5">
              <SiGithub className="h-5 w-5 text-violet-400" />

              <div>
                <p className="font-medium text-white">
                  GitHub
                </p>

                <p className="text-sm text-zinc-400">
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
          <Card className="border-zinc-700 bg-zinc-800 transition-all hover:border-violet-500">
            <CardContent className="flex items-center gap-4 p-5">
              <SiLinkerd className="h-5 w-5 text-violet-400" />

              <div>
                <p className="font-medium text-white">
                  LinkedIn
                </p>

                <p className="text-sm text-zinc-400">
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
  );
}