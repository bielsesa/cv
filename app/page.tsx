import Studies from "@/components/studies";
import Experience from "@/components/experience";
import Gamedev from "@/components/gamedev";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-y-4 bg-bg p-10">
      <Header />
      <Experience />
      <Gamedev />
      <Studies />
    </main>
  );
}
