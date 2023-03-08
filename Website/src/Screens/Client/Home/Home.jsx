import Carousels from "../../../components/Carousels/Carousels";
import TopNav from "../../../components/TopNav/TopNav";
import CarouselsCard from "../../../components/Card/CarouselsCard";
import Footer from "../../../components/Footer/Footer";
import Snipet1 from "../../../components/Snippet/Snipet1";
import Snipet2 from "../../../components/Snippet/Snipet2";
import Snipet3 from "../../../components/Snippet/Snipet3";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Carousels />
      <div className="container">
        <CarouselsCard />
        <CarouselsCard />
      </div>
      <Snipet1 />
      <div className="container">
        <CarouselsCard />
        <CarouselsCard />
      </div>
      <Snipet2 />
      <div className="container">
        <CarouselsCard />
        <CarouselsCard />
      </div>
      <Snipet3 />
      <Footer />
    </div>
  );
};

export default Home;
