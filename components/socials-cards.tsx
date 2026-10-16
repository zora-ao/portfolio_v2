import { Card, CardContent } from "./ui/card";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

export default function SocialsCard() {
  return (
    <Card className="border border-strong bg-background">
      <CardContent className="flex items-center justify-around">
        <div className="text-justify">
          <h3 className="text-lg font-semibold text-foreground">
            Connect With Me
          </h3>

          <p className="text-sm text-foreground">
            Find me on these platforms
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/zora-ao"
            target="_blank"
            className="rounded-full border border-strong p-2 transition-all hover:border-brand hover:bg-brand-muted"
          >
            <SiGithub className="h-4 w-4 text-foreground" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            className="rounded-full border border-strong p-2 transition-all hover:border-brand hover:bg-brand-muted"
          >
            <SiInstagram className="h-4 w-4 text-foreground" />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            className="rounded-full border border-strong p-2 transition-all hover:border-brand hover:bg-brand-muted"
          >
            <SiFacebook className="h-4 w-4 text-foreground" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}