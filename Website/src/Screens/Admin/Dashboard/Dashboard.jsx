import jwtDecode from "jwt-decode";
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
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const data = [
    {
      name: "30/05/2023",
      uv: 12,
    },
    {
      name: "31/05/2023",
      uv: 7,
    },
    {
      name: "01/06/2023",
      uv: 23,
    },
    {
      name: "02/06/2023",
      uv: 19,
    },
    {
      name: "03/06/2023",
      uv: 27,
    },
  ];
  const data01 = [
    { name: "Group A", value: 5 },
    { name: "Group B", value: 3 },
    { name: "Group C", value: 7 },
    { name: "Group D", value: 8 },
    { name: "Group E", value: 6 },
    { name: "Group F", value: 7 },
  ];
  if (localStorage.getItem("token")) {
    if (jwtDecode(localStorage.getItem("token")).rolename !== "user") {
      return (
        <>
          <TopNav />
          <div className="container-scroller">
            <div className="page-body-wrapper">
              <div className="main-panel">
                <div className="content-wrapper ">
                  <div className="row">
                    <div className="col-lg-3 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="line-chart-row-title mb-3">
                              Người dùng
                            </div>
                            <h2 className="text-success font-weight-bold">
                              56
                            </h2>
                            <i className="mdi mdi-account-outline mdi-25px text-dark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="line-chart-row-title mb-3">
                              Phòng
                            </div>
                            <h2 className="text-success font-weight-bold">
                              23
                            </h2>
                            <i className="mdi mdi-home-outline mdi-25px text-dark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="line-chart-row-title mb-3">
                              Nhân viên
                            </div>
                            <h2 className="text-success font-weight-bold">
                              12
                            </h2>
                            <i className="mdi mdi-account-key-outline mdi-25px text-dark"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="line-chart-row-title mb-3">
                              Đơn đặt
                            </div>
                            <h2 className="text-success font-weight-bold">
                              17
                            </h2>
                            <i className="mdi mdi-file-document-outline mdi-25px text-dark"></i>
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
                              Đơn đặt phòng theo ngày
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
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="card-title">Xu hướng đặt phòng</h4>
                          </div>
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
    } else {
      return <Navigate to={"/"} />;
    }
  } else {
    return <Navigate to={"/"} />;
  }
};

export default Dashboard;
