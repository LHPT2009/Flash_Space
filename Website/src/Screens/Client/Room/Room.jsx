import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListItem from "../../../components/ListItem/ListItem";

const Room = () => {
  return (
    <div>
      <TopNav />
      <div
        classNameName="home-section"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <section className="padding-y">
          <div className="container">
            <div className="row">
              <Sidebar />
              <ListItem />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
