import Navbar from "../../Components/Navbar/navbar";
import TopContainer from "../../Components/Top-Container/topContainer";
import StatsSection from "../../Components/StatsSection/statsSection";
import OurProductsSection from "../../Components/OurProductsSection/ourProducts";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="mainContainer">
        <TopContainer />
        <StatsSection />
        <OurProductsSection />
      </main>
    </div>
  );
};

export default HomePage;
