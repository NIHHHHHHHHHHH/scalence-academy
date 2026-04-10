import Navbar from "../components/Navbar";
import ResultsWall from "@/components/ResultsWall";
import ExamSelector from "@/components/interactive/ExamSelector";

export default function Home() {
  return (
    <>
      <Navbar />
      <ResultsWall />
      <ExamSelector />
    </>
  );
}
