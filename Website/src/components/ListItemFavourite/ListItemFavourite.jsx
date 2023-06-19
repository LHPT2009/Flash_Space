import ItemGridFavourite from "./ItemGridFavourite";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Swal from "sweetalert2";

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
        }/favoriteroom/${id}`
      )
      .then((res) => {
        setArr(res.data);
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const delItem = async (idfar) => {
    Swal.fire({
      icon: "success",
      title: "Đã xóa thành công!",
      showConfirmButton: true,
    }).then(async () => {
      const del = await axios
        .delete(
          `${
            process.env.REACT_APP_URL
              ? `${process.env.REACT_APP_URL}`
              : `http://localhost:8000`
          }/favoriteroom/${idfar}`
        )
        .then((res) => {
          loaddata();
        });
    });
  };

  const sortarr = arr.reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortarr.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <main className="col-lg-12 m-3">
        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong className="d-block py-2">
            {arr.length} tổng số phòng yêu thích của bạn{" "}
          </strong>
          <div className="ms-auto ">
            <select className="form-select d-inline-block w-auto me-1">
              <option value="1">Gần nhất</option>
              <option value="2">Xa nhất</option>
            </select>
          </div>
        </header>
        <div>
          {currentPosts.map((item) => (
            <div class="row">
              <div class="col-sm-11">
                <Link
                  to={`/detailroom/${item.idroom._id}`}
                  class="card"
                  style={{
                    textDecoration: "none",
                    height: "300px",
                  }}
                >
                  <div class="row">
                    <div class="col-sm-6">
                      <img
                        src={`${
                          process.env.REACT_APP_URL
                            ? `${process.env.REACT_APP_URL}`
                            : `http://localhost:8000`
                        }/singleimage/${item.idroom.mainimage}`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = `${
                            process.env.REACT_APP_URL
                              ? `${process.env.REACT_APP_URL}`
                              : `http://localhost:8000`
                          }/singleimage/error.jpg`;
                        }}
                        class="card-img"
                        alt="..."
                        style={{ height: "300px" }}
                      />
                    </div>
                    <div class="col-sm-6 d-flex flex-column text-black">
                      <div class="card-body" style={{ padding: "15px" }}>
                        <small>{item.idroom.idcareer.careername}</small>
                        <h5 class="card-title">{item.idroom.subject}</h5>
                        <span class="pull-left">
                          <span class="price">
                            {item.idroom.price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                          <span class="period">/1h</span>
                        </span>
                        <p class="card-text">{item.idroom.describe}</p>
                        <i class="fa fa-user"></i> 5
                      </div>
                      <div class="footer">
                        <small class="text-muted">{`
                    ${item.idroom.housenumberstreetname},
                     ${item.idroom.idward.wardname},
                      ${item.idroom.iddistrict.districtname},
                       ${item.idroom.idprovince.provincename}
                       `}</small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-sm-1">
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ height: "300px" }}
                  onClick={(e) => delItem(item._id)}
                >
                  Hủy yêu thích
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr />

        <footer className="d-flex mt-4">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={sortarr.length}
            paginate={paginate}
          />
        </footer>
      </main>
    </div>
  );
};

export default ListItem;
