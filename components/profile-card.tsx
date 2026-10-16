import Image from "next/image";
import { Download, Mail } from "lucide-react";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import PixelTransition from "./ui/PixelTransition";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/zora-ao",
    icon: SiGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: SiInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourusername",
    icon: SiFacebook,
  },
];

export default function ProfileCard() {
  return (
    <Card>
      <CardContent className="space-y-4">
        {/* Avatar + Intro */}
        <div className="flex items-center gap-4">
          <div className="relative shrink-0 rounded-xl border border-border bg-muted/50 p-[1px]">
            <span
              aria-hidden
              className="absolute -inset-2 rounded-2xl bg-brand/25 blur-xl animate-glow-in"
            />
            <div className="relative h-24 w-24 overflow-hidden rounded-[11px] bg-card">
              <PixelTransition
                firstContent={
                  <Image
                    src="/cat-avatar.jpg"
                    alt="Cat avatar"
                    fill
                    className="object-cover"
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "var(--card)",
                    }}
                  >
                    <Image
                      src="/profile.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                }
                gridSize={8}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
              />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Carl Jasper Ramos
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Aspiring Full Stack Developer
            </p>

            <p className="mt-1.5 text-xs italic text-muted-foreground">
              &ldquo;Pain is inevitable. Suffering is
              optional.&rdquo; &mdash; Haruki Murakami
            </p>

            <div className="mt-3 flex gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full border border-border p-1.5 text-foreground transition-colors hover:border-brand hover:bg-brand-muted hover:text-brand"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:carljasperramos97@gmail.com">
            <Button className="rounded-lg border border-transparent bg-brand text-brand-foreground hover:bg-brand-600 active:scale-[0.97]">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-lg border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.97]"
            >
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
