import Intro from "./components/home/Intro";
import EnterpriseSection from "./components/home/EnterpriseSection";
import SideProjectsSection from "./components/home/SideProjectsSection";
import GTProjectsSection from "./components/home/GTProjectsSection";

export default function Home() {
  return (
    <main>
      <Intro />
      <EnterpriseSection />
      <SideProjectsSection />
      <GTProjectsSection />
    </main>
  );
}
