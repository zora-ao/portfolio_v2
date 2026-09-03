import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import InfoBadges from "./info-badges";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import PixelTransition from "./ui/PixelTransition";

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Outer Profile Header */}
      <div className="flex gap-4 items-center pt-4 md:py-0">
        {/* Avatar Wrapper */}
        <div className="p-[1px] rounded-xl border border-border bg-muted/50 shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-[11px] bg-card">
            <PixelTransition
              firstContent={
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1yHLhFxkJZV5wgstXnEs2lKGimVXrcOkSwePXt3R-7g4jNl8_4Ta4_Y&s=10"
                  alt="default pixel transition content"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "var(--card)"
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

        <div>
          <h2 className="text-xl font-semibold text-foreground tracking-tight">
            Carl Jasper Ramos
          </h2>

          <p className="mt-0.5 text-xs text-muted-foreground">
            Aspiring Full Stack Developer
          </p>

          <p className="mt-2 text-xs italic text-muted-foreground/90">
            “Pain is inevitable. Suffering is optional.” <br />
            — Haruki Murakami
          </p>
        </div>
      </div>

      {/* Card Container for Inner Content */}
      <div>
        <Card className="rounded-2xl border-border bg-card text-card-foreground shadow-2xl overflow-hidden">
          <CardContent className="px-6">
            <InfoBadges />
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons Below Container */}
      <div className="flex flex-wrap gap-3 justify-center">
        <a href="mailto:carljasperramos97@gmail.com">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg border border-border">
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
            className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-lg"
          >
            <Download className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </a>
      </div>
    </div>
  );
}