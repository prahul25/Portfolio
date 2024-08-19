import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="dark:bg-black bg-white select-none">
    <LandingPage/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}
