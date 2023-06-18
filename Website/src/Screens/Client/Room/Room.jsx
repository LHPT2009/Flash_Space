import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import ItemGrid from "../../../components/ListItem/ItemGrid";
import Pagination from "../../../components/Pagination/Pagination";

const Room = () => {
  const [roomData, setRoomData] = useState([]);
  const [roomFilterData, setRoomFilterData] = useState([]);

  //ListCate
  const [listCarrer, setListCarrer] = useState([]);
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listWard, setListWard] = useState([]);
  // Filter
  const [searchName, setSearchName] = useState();
  const [sort, setSort] = useState("0");
  const [arrFilterCarrer, setArrFilterCarrer] = useState([]);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchQuantity, setsearchQuantity] = useState();
  const [searchWard, setSearchWard] = useState();
  const [searchDistrict, setSearchDistrict] = useState();
  const [searchProvince, setSearchProvince] = useState();
  const [contentchatgpt, setContentChatGPT] = useState("");
  const [rescontentchatgpt, setResContentChatGPT] = useState(
    "Chào bạn tôi rất sẵn lòng hỗ trợ bạn!"
  );
  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/room`
      )
      .then((res) => {
        setRoomData(res.data);
        setRoomFilterData(res.data);
      });
  }, []);

  const applyFilters = () => {
    let updatedList = roomData;

    if (arrFilterCarrer) {
      let arr = [];
      arrFilterCarrer.map((item) => {
        let List = updatedList.filter(
          (itemlist) => itemlist.idcareer._id === item.id
        );
        arr.push(...List);
      });
      if (arr.length == 0) {
        updatedList = roomData;
      } else {
        updatedList = arr;
      }
    }

    if (searchProvince) {
      updatedList = updatedList.filter(
        (item) => item.idprovince._id == searchProvince
      );
    }

    if (searchDistrict) {
      updatedList = updatedList.filter(
        (item) => item.iddistrict._id == searchDistrict
      );
    }

    if (searchWard) {
      updatedList = updatedList.filter((item) => item.idward._id == searchWard);
    }

    if (searchQuantity) {
      updatedList = updatedList.filter(
        (item) => item.quantity <= searchQuantity
      );
    }

    if (sort) {
      if (sort == "1") {
        updatedList = updatedList.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      if (sort == "2") {
        updatedList = updatedList.sort((a, b) => (a.price < b.price ? 1 : -1));
      }
    }

    if (searchName) {
      updatedList = updatedList.filter(
        (item) =>
          item.subject.toLowerCase().search(searchName.toLowerCase().trim()) !==
          -1
      );
    }

    if (maxPrice) {
      updatedList = updatedList.filter((item) => item.price <= maxPrice);
    }

    setRoomFilterData(updatedList);
  };

  const handleChangeChecked = (id) => {
    const list = arrFilterCarrer;
    const check = list.find((item) => {
      return item.id === id;
    });
    if (check) {
      console.log(list.filter((n) => n.id !== id));
      setArrFilterCarrer(list.filter((n) => n.id !== id));
    } else {
      console.log([...list, { id: id }]);
      setArrFilterCarrer([...list, { id: id }]);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [
    searchName,
    sort,
    arrFilterCarrer,
    maxPrice,
    searchQuantity,
    searchProvince,
    searchDistrict,
    searchWard,
  ]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/career`
      )
      .then((res) => {
        setListCarrer(res.data);
      });
  }, [listCarrer]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/province`
      )
      .then((res) => {
        setListProvince(res.data);
      });
  }, [listProvince]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/district`
      )
      .then((res) => {
        setListDistrict(res.data);
      });
  }, [listDistrict]);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/ward`
      )
      .then((res) => {
        setListWard(res.data);
      });
  }, [listWard]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const room = roomFilterData.filter((item) => item.static == 1).reverse();
  const district = listDistrict.filter(
    (n) => n.idprovince._id == searchProvince
  );
  const ward = listWard.filter((n) => n.iddistrict._id == searchDistrict);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = room.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const chatgptroom = () => {
    axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/virtualassistant`,
        {
          contentchatgpt,
        }
      )
      .then((res) => {
        setResContentChatGPT(res.data);
      });
  };
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
              <aside className="col-lg-4">
                <button
                  className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#aside_filter"
                >
                  Bộ lọc
                </button>
                <div
                  id="aside_filter"
                  className="collapse card d-lg-block mb-5"
                >
                  <article className="filter-group">
                    <header className="card-header">Trợ lý giải đáp AI</header>
                    <div className="collapse show" id="collapse_aside_brands">
                      <div className="card-body">
                        <div class="input-group">
                          <textarea
                            class="form-control"
                            aria-label="With textarea"
                            value={rescontentchatgpt}
                            style={{ height: "200px" }}
                            disabled
                          ></textarea>
                          <div class="input-group mt-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Nội dung bạn muốn hỏi?"
                              onChange={(e) =>
                                setContentChatGPT(e.target.value)
                              }
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-success"
                                type="button"
                                onClick={chatgptroom}
                              >
                                <i
                                  class="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="filter-group">
                    <header className="card-header">Nghề nghiệp</header>
                    <div className="collapse show" id="collapse_aside_brands">
                      <div className="card-body">
                        {listCarrer.map((item) => (
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => handleChangeChecked(item._id)}
                            />
                            <span className="form-check-label">
                              {" "}
                              {item.careername}{" "}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </article>

                  <article className="filter-group">
                    <header className="card-header">Khu vực</header>
                    <div className="collapse show" id="collapse_aside_brands">
                      <div className="card-body">
                        <div className="form-group row">
                          <div className="col-sm-12">
                            <label for="min" className="form-label">
                              Thành Phố
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) =>
                                setSearchProvince(e.target.value)
                              }
                            >
                              <option selected>Chọn Thành Phố</option>
                              {listProvince.map((item) => (
                                <option value={item._id}>
                                  {item.provincename}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-12">
                            <label for="min" className="form-label">
                              Quận/Huyện
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) =>
                                setSearchDistrict(e.target.value)
                              }
                            >
                              <option selected>Chọn Quận/Huyện</option>
                              {district.map((item) => (
                                <option value={item._id}>
                                  {item.districtname}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-12">
                            <label for="min" className="form-label">
                              Phường/xã
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) => setSearchWard(e.target.value)}
                            >
                              <option selected>Chọn Phường/xã</option>
                              {ward.map((item) => (
                                <option value={item._id}>
                                  {item.wardname}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="filter-group">
                    <header className="card-header">Giá tiền</header>
                    <div className="collapse show" id="collapse_aside2">
                      <div className="card-body">
                        <div className="row mb-3">
                          <label for="customRange2" class="form-label">
                            Giá hiện tại:{" "}
                            {maxPrice.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </label>
                          <input
                            type="range"
                            class="form-range"
                            min="0"
                            max="500000"
                            onChange={(e) =>
                              setMaxPrice(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="filter-group">
                    <header className="card-header">Sức chứa</header>
                    <div className="collapse show" id="collapse_aside2">
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-12">
                            <input
                              className="form-control"
                              id="max"
                              placeholder="Nhập sức chứa"
                              type="number"
                              onChange={(e) =>
                                setsearchQuantity(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <main className="col-lg-8">
                <small>Số phòng hiện tại</small>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {" "}
                  {room.length}
                </span>
                <div class="row">
                  <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                    <div class="col-lg-3 m-1">
                      <select
                        className="form-select d-inline-block w-100"
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option value="0">Tùy chọn</option>
                        <option value="1">Giá thấp đến cao</option>
                        <option value="2">Giá cao đến thấp</option>
                      </select>
                    </div>
                    <div class="col-lg-6 m-1">
                      <input
                        type="text"
                        class="form-control d-inline-block w-100"
                        id="exampleFormControlInput1"
                        placeholder="Tìm kiểm theo tên"
                        onChange={(e) => setSearchName(e.target.value)}
                      />
                    </div>
                    <div class="col-lg-3 m-1">
                      <button
                        type="button"
                        class="btn btn-primary d-inline-block w-100"
                      >
                        Tìm vị trí gần khu vực
                      </button>
                    </div>
                  </header>
                </div>
                <div>
                  {currentPosts.map((item) => (
                    <ItemGrid
                      _id={item._id}
                      mainimage={item.mainimage}
                      careername={item.idcareer.careername}
                      subject={item.subject}
                      price={item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                      describe={item.describe}
                      quantity={item.quantity}
                      location={`${item.housenumberstreetname}
                      , ${item.idward.wardname}
                      , ${item.iddistrict.districtname}
                      , ${item.idprovince.provincename}`}
                      lengthroom={item.length}
                      widthroom={item.width}
                    />
                  ))}
                </div>
                <hr />

                <footer className="d-flex mt-4">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={room.length}
                    paginate={paginate}
                  />
                </footer>
              </main>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
