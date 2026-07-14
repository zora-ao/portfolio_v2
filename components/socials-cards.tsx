import { Card, CardContent } from "./ui/card";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

export default function SocialsCard() {
  return (
    <Card className="border-zinc-700 bg-zinc-900">
      <CardContent className="px-6">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-white">
            Connect With Me
          </h3>

          <p className="text-sm text-zinc-400">
            Find me on these platforms
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="rounded-xl border border-zinc-700 p-4 transition-all hover:border-violet-500 hover:bg-zinc-800"
          >
            <SiGithub className="h-6 w-6 text-white" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            className="rounded-xl border border-zinc-700 p-4 transition-all hover:border-violet-500 hover:bg-zinc-800"
          >
            <SiInstagram className="h-6 w-6 text-white" />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            className="rounded-xl border border-zinc-700 p-4 transition-all hover:border-violet-500 hover:bg-zinc-800"
          >
            <SiFacebook className="h-6 w-6 text-white" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}