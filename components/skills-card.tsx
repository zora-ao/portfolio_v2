import { Card, CardContent } from "./ui/card";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function SkillsCard() {
  return (
    <Card className="rounded-2xl shadow-2xl border-border bg-card text-card-foreground overflow-hidden">
      <CardContent className="px-6">
        {/* Header Title & Description */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">
            Tech Stack
          </h3>

          <p className="mt-1 text-xs text-muted-foreground">
            Technologies I use to build applications
          </p>
        </div>

        {/* Centered Badges */}
        <div className="flex flex-wrap gap-2.5 justify-center items-center">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-border
                  bg-muted/50
                  px-3.5 py-1.5
                  text-xs font-medium text-foreground
                  shadow-xs backdrop-blur-xs
                  transition-all duration-200
                  hover:border-ring hover:bg-accent hover:text-accent-foreground
                  hover:-translate-y-0.5
                "
              >
                <Icon
                  size={14}
                  className="text-foreground shrink-0"
                />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}