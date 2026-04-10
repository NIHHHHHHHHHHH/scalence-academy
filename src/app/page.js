import Navbar from "../components/Navbar";
import ResultsWall from "@/components/ResultsWall";
import Hero from "@/components/Hero";
import ExamSelector from "@/components/interactive/ExamSelector";
import WhyUs from "@/components/WhyUs";
import DayTimeline from "@/components/interactive/DayTimeline";
import AudienceToggle from "@/components/interactive/AudienceToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResultsWall />
      <Hero />
      <ExamSelector />
      <WhyUs />
      <DayTimeline />
      <AudienceToggle />
    </>
  );
}
