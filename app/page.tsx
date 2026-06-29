import HomePage from './components/home/HomePage';
import PieSection from './components/home/PieSection';
import LatestPerformance from './components/home/LatestPerformance';
import Disclaimer from './components/home/Disclaimer';
import HeroPage from './components/home/HeroPage';
import WhyNs from './components/home/WhyNs';
import PartnerWithNs from './components/home/PartnerWithNs';
import ScrollToTop from './components/home/ScrollToTop';
import PortfolioStats from './components/home/PortfolioStats';
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <main className='flex text-white min-h-screen bg-[#080808] font-poppins space-y-8 md:space-y-16 lg:space-y-24 flex-col'>
      <HeroPage />
      <div className='px-4 md:p-4 lg:p-16 space-y-8 md:space-y-16 lg:space-y-24'>
        <HomePage />
        <PieSection />
        <Testimonials />
        <LatestPerformance />
        <PortfolioStats />
        <WhyNs />
        <PartnerWithNs />
        <Disclaimer />
      </div>
      <ScrollToTop />
    </main>
  );
}
