import Intro from "./components/home/Intro";
import EnterpriseSection from "./components/home/EnterpriseSection";
import PersonalProjectsSection from "./components/home/PersonalProjectsSection";
import GTProjectsSection from "./components/home/GTProjectsSection";

export default function Home() {
  return (
    <main>
      <Intro />
      <EnterpriseSection />
      <GTProjectsSection />
      <PersonalProjectsSection />
    </main>
  );
}
