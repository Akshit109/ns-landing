import HomePage from "./components/home/HomePage";
import PieSection from "./components/home/PieSection";
import LatestPerformance from "./components/home/LatestPerformance";
import Disclaimer from "./components/home/Disclaimer";
import HeroPage from "./components/home/HeroPage";
import WhyNs from "./components/home/WhyNs";
import PartnerWithNs from "./components/home/PartnerWithNs";

export default function Home() {
  return (
    <main className="flex text-white min-h-screen bg-[#080808] font-sans flex-col p-4 pt-16 lg:p-16">
      <div >
         
        <div className="space-y-16 lg:space-y-24">
          <div className="-m-4 lg:-m-16">
          <HeroPage />
          </div>
          <HomePage/>
        <PieSection />
        <LatestPerformance />
        <WhyNs/>
        <PartnerWithNs />
        <Disclaimer/>
        </div>
      </div>
    </main>
  );
} 