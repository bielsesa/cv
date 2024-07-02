import Image from "next/image";
import Experience from "../components/experience";
import Gamedev from "../components/gamedev";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 bg-bg min-h-screen p-10">
      <div id="header">
        <p className="text-pink font-light text-4xl">Biel Serrano</p>
        <p className="text-lavender italic font-light text-lg">Backend developer based in Barcelona (ES)</p>
        <p className="text-normal text-xl">
          <a className="hover:underline" href="mailto:bielsesa@gmail.com">Email</a> / <a className="hover:underline" href="www.linkedin.com/in/biel-serrano-sánchez-13ba05170">LinkedIn</a> / <a className="hover:underline" href="https://github.com/bielsesa">GitHub</a> / <a className="hover:underline" href="https://astronautpotato.itch.io/">itch.io</a></p>
      </div>
      <Experience />
      <Gamedev />
      <div id="studies">
        <h1 className="text-orange text-xl">Studies</h1>
      </div>
    </main>
  );
}
