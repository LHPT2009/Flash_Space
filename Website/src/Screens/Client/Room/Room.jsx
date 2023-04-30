import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListItem from "../../../components/ListItem/ListItem";
import { InformationAccountContext } from "../../../context/InformationAccountContext";
import { useContext } from "react";

const Room = () => {
  
  const { informations } = useContext(InformationAccountContext);
  Object.assign(informations,{Room:"showdataroom"})
  console.log(JSON.stringify(informations))

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
