import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper ">
              <div className="row">
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="line-chart-row-title mb-3">
                          Người dùng
                        </div>
                        <h2 className="text-success font-weight-bold">18390</h2>
                        <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="card-title">
                          Tình trạng hoạt động của phòng
                        </h4>
                        <h4 className="text-success font-weight-bold">
                          Số lượng phòng hiện có là
                          <span className="text-dark ms-3">163</span>
                        </h4>
                      </div>
                      <div
                        id="support-tracker-legend"
                        className="support-tracker-legend"
                      ></div>
                      {/* <canvas id="supportTracker"></canvas> */}
                      <div style={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer>
                          <AreaChart
                            data={data}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area
                              type="monotone"
                              dataKey="uv"
                              stroke="#8884d8"
                              fill="#8884d8"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 grid-margin grid-margin-md-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div style={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart width={400} height={400}>
                            <Pie
                              dataKey="value"
                              isAnimationActive={false}
                              data={data01}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              label
                            />
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
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

export default Dashboard;
