
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Pricing from "../Pricing/Pricing";
import Navbar from "../Shared/Navbar";
import TeamSection from "../TeamSection/TeamSection";
import Banner from "../banner/Banner";




const Home = () => {

  return (
    <div>

      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Pricing></Pricing>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;