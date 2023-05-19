import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const ListItem = () => {
  const [arr, setArr] = useState([]);
  const id = jwtDecode(localStorage.getItem("token")).id;

  const loaddata = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/bookingroom/${id}`
      )
      .then((res) => {
        setArr(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div className="container">
      <main className="col-lg-12 m-3">
        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong className="d-block py-2">
            {arr.length} tổng số phòng từng đặt{" "}
          </strong>
          <div className="ms-auto ">
            <select className="form-select d-inline-block w-auto me-1">
              <option value="0">Mới nhất</option>
              <option value="1">Giá thấp đến cao</option>
              <option value="2">Giá cao đến thấp</option>
              <option value="3">Đánh giá</option>
            </select>
          </div>
        </header>
        <div class="row">
          <div class="col-3">
            <div className="m-3">Ảnh đại diện</div>
          </div>
          <div class="col-3">
            <div className="m-3">Mã hóa đơn</div>
          </div>
          <div class="col-3">
            <div className="m-3">Ngày đặt</div>
          </div>
          <div class="col-3">
            <div className="m-3">Tổng tiền</div>
          </div>
        </div>
        {arr.map((item) => (
          <Link
            to={`/detailhistory/${item._id}`}
            class="card"
            style={{
              textDecoration: "none",
              color: "#000",
              borderTopLeftRadius: "100px",
              borderBottomLeftRadius: "100px",
            }}
          >
            <div class="row">
              <div class="col-3 d-flex align-items-center">
                <div className="m-3">
                  <img
                    src={`http://localhost:8000/singleimage/icon.jpg`}
                    alt="co roi"
                    style={{
                      width: "70px",
                      height: "70px",
                      WebkitBorderRadius: "100px",
                      MozBorderRadius: "100px",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
              <div class="col-3 d-flex align-items-center">
                <div className="m-3">{item._id.slice(0, 10)}...</div>
              </div>
              <div class="col-3 d-flex align-items-center">
                <div className="m-3">{item.date}</div>
              </div>
              <div class="col-3 d-flex align-items-center">
                <div className="m-3">{item.total}</div>
              </div>
            </div>
          </Link>
        ))}
        <hr />

        <footer className="d-flex mt-4">
          <nav className="ms-3">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  {"<"}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {">"}
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
};

export default ListItem;
