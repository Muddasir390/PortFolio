import { About, Contact, Experience, Hero, Nav, Projects, Skills } from "./components/Sections";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
