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
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115985236d4956368fbcb"}
        />
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115a15236d4956368fbcd"}
        />
      </div>
      <Snipet1 />
      <div className="container">
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115985236d4956368fbcb"}
        />
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115985236d4956368fbcb"}
        />
      </div>
      <Snipet2 />
      <div className="container">
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115985236d4956368fbcb"}
        />
        <CarouselsCard
          title={"Lĩnh vực nghệ thuật"}
          content={"Đa dạng về loại phòng với"}
          note={"Giá cả hợp lý"}
          idcareer={"643115985236d4956368fbcb"}
        />
      </div>
      <Snipet3 />
      <Footer />
    </div>
  );
};

export default Home;
