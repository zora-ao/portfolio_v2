import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import InfoBadges from "./info-badges";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import PixelTransition from "./ui/PixelTransition";

export default function ProfileCard() {
  return (
    <Card className="border border-primary bg-background">
      <CardContent className="px-6">
        <div className="flex gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-primary">
            <PixelTransition
              firstContent={
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1yHLhFxkJZV5wgstXnEs2lKGimVXrcOkSwePXt3R-7g4jNl8_4Ta4_Y&s=10"
                  alt="default pixel transition content, a cat!"
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
                    backgroundColor: "#111"
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
              className="custom-pixel-card"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">
              Carl Jasper Ramos
            </h2>

            <p className="mt-0 text-zinc-400">
              Aspiring Full Stack Developer
            </p>

            <p className="text-foreground font-semibold">
              “Pain is inevitable. Suffering is optional.” <br />
              - Haruki Murakami
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-primary p-4">
          <InfoBadges />
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="mailto:carljasperramos97@gmail.com">
            <Button className="bg-violet-600 hover:bg-violet-700 rounded-sm">
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
              className="border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 rounded-sm"
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