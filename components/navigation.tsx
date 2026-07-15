import { Briefcase, Home, Mail, Sun, User } from "lucide-react";

type Section =
  | "home"
  | "about"
  | "certificates"
  | "contact";

interface BottomNavProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export default function BottomNav({
  activeSection,
  setActiveSection,
}: BottomNavProps) {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-12 rounded-2xl border border-zinc-700 bg-zinc-950 px-8 py-2">

        <button onClick={() => setActiveSection("home")}>
          <Home
            className={`h-5 w-5 ${
              activeSection === "home"
                ? "text-violet-400"
                : "text-white"
            }`}
          />
        </button>

        <button onClick={() => setActiveSection("about")}>
          <User
            className={`h-5 w-5 ${
              activeSection === "about"
                ? "text-violet-400"
                : "text-white"
            }`}
          />
        </button>

        <button onClick={() => setActiveSection("certificates")}>
          <Briefcase
            className={`h-5 w-5 ${
              activeSection === "certificates"
                ? "text-violet-400"
                : "text-white"
            }`}
          />
        </button>

        <button onClick={() => setActiveSection("contact")}>
          <Mail
            className={`h-5 w-5 ${
              activeSection === "contact"
                ? "text-violet-400"
                : "text-white"
            }`}
          />
        </button>

        <button>
          <Sun className="h-5 w-5 text-white" />
        </button>

      </nav>
    </div>
  );
}