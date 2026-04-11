import Navbar from "../components/Navbar";
import ResultsWall from "@/components/ResultsWall";
import Hero from "@/components/Hero";
import ExamSelector from "@/components/interactive/ExamSelector";
import WhyUs from "@/components/WhyUs";
import DayTimeline from "@/components/interactive/DayTimeline";
import AudienceToggle from "@/components/interactive/AudienceToggle";
import SeatGrid from "@/components/interactive/SeatGrid";
import Enrollment from "@/components/Enrollment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"

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
      <SeatGrid />
      <Enrollment />
      <Contact />
      <Footer />
    </>
  );
}
