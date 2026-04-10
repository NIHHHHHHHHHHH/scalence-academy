import Navbar from "../components/Navbar";
import ResultsWall from "@/components/ResultsWall";
import Hero from "@/components/Hero";
import ExamSelector from "@/components/interactive/ExamSelector";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResultsWall />
      <Hero />
      <ExamSelector />
      <WhyUs />
    </>
  );
}
