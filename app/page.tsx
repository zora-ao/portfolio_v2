import ProfileCard from "@/components/profile-card";
import SkillsCard from "@/components/skills-card";
import SocialsCard from "@/components/socials-cards";
import RightContainer from "@/components/right-container";

export default function Home() {
  return (
    <main className="h-screen bg-background px-8 py-4 overflow-hidden">
      <div className="mx-auto h-full max-w-7xl">
        <div className="grid h-full gap-8 lg:grid-cols-[430px_1fr]">

          {/* Left Side */}
          <aside className="h-full overflow-y-auto scrollbar-hide pr-2">
            <div className="space-y-4">
              <ProfileCard />
              <SkillsCard />
              <SocialsCard />
            </div>
          </aside>

          {/* Right Side */}
          <RightContainer />

        </div>
      </div>
    </main>
  );
}