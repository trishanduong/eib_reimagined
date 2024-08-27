import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { HomepageDescription } from "./components/HomepageDescription";

export default function Home() {
  return (
    <>
    <NavBar />
    <main className="flex bg-custom-radial-gradient min-h-screen flex-col items-center justify-between px-48 py-24">
      <Hero />
      <HomepageDescription />
    </main>
    </>
  );
}
