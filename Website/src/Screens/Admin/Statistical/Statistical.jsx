import TopNav from "../../../components/Admin/TopNav/TopNav";
import Footer from "../../../components/Admin/Footer/Footer";

const Statistical = () => {
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Line chart</h4>
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Bar chart</h4>
                    <canvas id="barChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Area chart</h4>
                    <canvas id="areaChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Doughnut chart</h4>
                    <canvas id="doughnutChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Pie chart</h4>
                    <canvas id="pieChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Scatter chart</h4>
                    <canvas id="scatterChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistical;
