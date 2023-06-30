import HomeFooter from "../components/Footers/HomeFooter";
import MainHeader from "../components/Headers/MainHeader/MainHeader";
import { ServicesSection, RoomsSection } from "../components/Sections";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <main>
        <ServicesSection />
        <RoomsSection />
      </main>
      <HomeFooter />
    </>
  );
};

export default HomePage;
