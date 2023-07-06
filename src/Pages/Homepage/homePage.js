import Navbar from "../../Components/Navbar/navbar";
import TopContainer from "../../Components/Top-Container/topContainer";
import StatsSection from "../../Components/StatsSection/statsSection";
import OurProductsSection from "../../Components/OurProductsSection/ourProducts";
import TrustedBySection from "../../Components/TrustedBy Section/trustedBySection";
import GetStartedSection from "../../Components/GetStartedSection/getStartedSection";
import IndustriesServedSection from "../../Components/IndustriesServedSection/industriesServedSection";
import BiggerGetStartedSection from "../../Components/BiggerGetStartedSection/biggerGetStartedSection";
import KnowMoreSection from "../../Components/KnowMoreSection/knowMoreSection";
import BlogSection from "../../Components/BlogSection/blogSection";
import SubscribeUsSection from "../../Components/SubscribeUsSection/subscribeUsSection";
import TopFooter from "../../Components/TopFooter/topFooter.js";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="mainContainer">
        <TopContainer />
        <StatsSection />
        <OurProductsSection />
        <TrustedBySection />
        <GetStartedSection />
        <IndustriesServedSection />
        <BiggerGetStartedSection />
        <KnowMoreSection />
        <BlogSection />
        <SubscribeUsSection />
      </main>
      <footer>
        <TopFooter />
      </footer>
    </div>
  );
};

export default HomePage;
