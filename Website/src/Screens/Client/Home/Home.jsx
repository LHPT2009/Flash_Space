import { Container } from "react-bootstrap";
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
      <Container>
        <CarouselsCard />
        <CarouselsCard />
      </Container>
      <Snipet1 />
      <Container>
        <CarouselsCard />
        <CarouselsCard />
      </Container>
      <Snipet2 />
      <Container>
        <CarouselsCard />
        <CarouselsCard />
      </Container>
      <Snipet3 />
      <Footer />
    </div>
  );
};

export default Home;
