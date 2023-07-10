import Navbar from "../../Components/Navbar/navbar";
import TopContainer from "../../Components/Top-Container/topContainer";
import StatsSection from "../../Components/StatsSection/statsSection";
import OurProductsSection from "../../Components/OurProductsSection/ourProducts";
import TrustedBySection from "../../Components/TrustedBy Section/trustedBySection";
import GetStartedSection from "../../Components/GetStartedSection/getStartedSection";
import HowItWorks from "../../Components/HowItWorks/howItWorks";
import IndustriesServedSection from "../../Components/IndustriesServedSection/industriesServedSection";
import BiggerGetStartedSection from "../../Components/BiggerGetStartedSection/biggerGetStartedSection";
import KnowMoreSection from "../../Components/KnowMoreSection/knowMoreSection";
import BlogSection from "../../Components/BlogSection/blogSection";
import SubscribeUsSection from "../../Components/SubscribeUsSection/subscribeUsSection";
import TopFooter from "../../Components/TopFooter/topFooter.js";
import MiddleFooter from "../../Components/MiddleFooter/middleFooter";
import BottomFooter from "../../Components/BottomFooter/bottomFooter";

const HomePage = () => {
  return (
    <div>
      <main className="mainContainer">
        <Navbar />
        <TopContainer />
        <StatsSection />
        <OurProductsSection />
        <TrustedBySection />
        <GetStartedSection />
        <HowItWorks />
        <IndustriesServedSection />
        <BiggerGetStartedSection />
        <KnowMoreSection />
        <BlogSection />
        <SubscribeUsSection />
      </main>
      <footer>
        <TopFooter />
        <MiddleFooter />
        <BottomFooter />
      </footer>
    </div>
  );
};

export default HomePage;
