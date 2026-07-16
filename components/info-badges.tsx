import {
  MapPin,
  GraduationCap,
  Clock3,
  Languages,
  Sparkles,
} from "lucide-react";

const badges = [
  {
    icon: MapPin,
    text: "Laguna, Philippines",
  },
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
    text: "English, Filipino",
  },
  {
    icon: Sparkles,
    text: "Building Projects",
  },
];

export default function InfoBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.text}
            className="
              flex items-center gap-2
              rounded-full
              border border-primary
              bg-background
              px-3 py-2
              text-sm text-foreground
            "
          >
            <Icon className="h-3.5 w-3.5 text-violet-400" />
            <span>{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
}