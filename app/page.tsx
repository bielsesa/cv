import Studies from "@/components/studies";
import Experience from "@/components/experience";
import Gamedev from "@/components/gamedev";
import Header from "@/components/header";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-y-4 bg-bg p-10">
      <a href="/cv.pdf" download="serrano-biel-CV.pdf"><Button className="fixed right-5 top-5 py-8">Download my CV <br /> as PDF</Button></a>
      <Header />
      <Experience />
      <Gamedev />
      <Studies />
    </main>
  );
}
