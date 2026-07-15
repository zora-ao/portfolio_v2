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

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export default function SkillsCard() {
  return (
    <Card className="border-zinc-700 bg-zinc-900">
      <CardContent className="px-6">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-white">
            Tech Stack
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            Technologies I use to build applications
          </p>
        </div>

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.title}>
              <h1 className="mb-3 text-sm font-medium tracking-wide text-zinc-500">
                {category.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex items-center gap-2
                        rounded-lg
                        border border-zinc-700
                        bg-zinc-800/50
                        px-3 py-2
                        text-sm text-zinc-200
                        transition-all duration-200
                        hover:border-violet-500
                        hover:bg-zinc-800
                        hover:-translate-y-0.5
                      "
                    >
                      <Icon
                        size={14}
                        className="text-zinc-400"
                      />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}