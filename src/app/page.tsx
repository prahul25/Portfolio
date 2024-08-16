import LandingPage from "@/components/LandingPage";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="dark:bg-black bg-white select-none">
    <LandingPage/>
    <Skills/>
    </div>
  );
}
