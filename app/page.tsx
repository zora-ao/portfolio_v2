import CertificatesGrid from "@/components/certificates-grid";
import ProfileCard from "@/components/profile-card";
import SkillsCard from "@/components/skills-card";
import SocialsCard from "@/components/socials-cards";

export default function Home() {
  return (
    <main className="h-screen bg-black p-8">
      <div className="mx-auto h-full max-w-7xl">
        <div className="grid h-full gap-8 lg:grid-cols-[400px_1fr]">
          
          {/* Left Side */}
          <aside className="h-full overflow-y-auto pr-2 scrollbar-hide">
            <div className="space-y-4">
              <ProfileCard />
              <SkillsCard />
              <SocialsCard />
            </div>
          </aside>

          {/* Right Side */}
          <section className="h-full">
            <CertificatesGrid />
          </section>

        </div>
      </div>
    </main>
  );
}