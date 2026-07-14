import { Card, CardContent } from "./ui/card";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Python", "Flask"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
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

          <p className="text-sm text-zinc-400">
            Technologies I use to build applications
          </p>
        </div>

        <div className="space-y-5">
          {categories.map((category) => (
            <div key={category.title}>
              <h4 className="mb-3 text-sm font-medium text-zinc-400">
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      rounded-lg
                      border border-zinc-700
                      bg-zinc-800/50
                      px-3 py-2
                      text-sm text-zinc-200
                      transition-colors
                      hover:border-violet-500
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}