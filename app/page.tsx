import { About, Contact, Experience, Hero, Marquee, Nav, Projects, Skills } from "./components/Sections";

export default function Home() {
  return (
    <main className="relative">
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
