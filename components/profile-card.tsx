import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import InfoBadges from "./info-badges";

export default function ProfileCard() {
  return (
    <Card className="border-zinc-700 bg-zinc-900">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative h-28 w-28 overflow-hidden rounded-xl border">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Carl Jasper Ramos
            </h2>

            <p className="mt-4 text-zinc-400">
              Aspiring Full Stack Developer
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-700 p-4">
          <InfoBadges />
        </div>
      </CardContent>
    </Card>
  );
}