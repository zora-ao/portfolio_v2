import {
  MapPin,
  GraduationCap,
  Clock3,
  Languages,
  Sparkles,
} from "lucide-react";

const badges = [
  {
    icon: GraduationCap,
    text: "BS Computer Science",
  },
  {
    icon: Clock3,
    text: "UTC+8",
  },
  {
    icon: Languages,
    text: "English, Tagalog",
  },
  {
    icon: Sparkles,
    text: "Building Projects",
  },
  {
    icon: MapPin,
    text: "Laguna, Philippines",
  },
];

export default function InfoBadges() {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center items-center">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.text}
            className="
              flex items-center gap-2
              rounded-full
              border border-border
              bg-muted/50
              px-3.5 py-1.5
              text-sm font-medium text-foreground
              shadow-xs backdrop-blur-xs
              transition-all duration-200
              hover:border-ring hover:bg-accent hover:text-accent-foreground
              hover:-translate-y-0.5
            "
          >
            <Icon className="h-3.5 w-3.5 text-foreground shrink-0" />
            <span>{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
}