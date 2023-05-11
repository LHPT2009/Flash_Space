import TopNav from "../../../components/TopNav/TopNav";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import ItemGrid from "../../../components/ListItem/ItemGrid";
// import Sidebar from "../../../components/Sidebar/Sidebar";
// import ListItem from "../../../components/ListItem/ListItem";

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
  const [searchCarrer, setSearchCarrer] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [searchAmount, setSearchAmount] = useState();
  const [searchWard, setSearchWard] = useState();
  const [searchDistrict, setSearchDistrict] = useState();
  const [searchProvince, setSearchProvince] = useState();


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
    if (searchCarrer) {
      updatedList = updatedList.filter((item) => item.idcareer._id === searchCarrer);
    }

    // if (searchProvince) {
    //   updatedList = updatedList.filter((item) => item.idprovince._id == searchProvince);
    // }
    // if (searchDistrict) {
    //   updatedList = updatedList.filter((item) => item.iddistrict._id == searchDistrict);
    // }
    if (searchWard) {
      updatedList = updatedList.filter((item) => item.idward._id == searchWard);
    }

    // Category Filter
    // if (selectedCategory) {
    //   updatedList = updatedList.filter(
    //     (item) => item.category === selectedCategory
    //   );
    // }

    // Cuisine Filter
    // const cuisinesChecked = cuisines
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());

    // if (cuisinesChecked.length) {
    //   updatedList = updatedList.filter((item) =>
    //     cuisinesChecked.includes(item.cuisine)
    //   );
    // }
    if(sort){
      if(sort === "1"){
        console.log("dang thuc hien 1")
        updatedList = updatedList.sort((a,b) => a.price - b.price)
      }
      if(sort === "2"){
        console.log("dang thuc hien 2")
        updatedList = updatedList.sort((a,b) => b.price - a.price)
      }
    }
    // Search Filter
    if (searchName) {
      updatedList = updatedList.filter(
        (item) => item.subject.toLowerCase().search(searchName.toLowerCase().trim()) !== -1
      );
    }

    if(minPrice && maxPrice){
      updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    }

    setRoomFilterData(updatedList);

    // !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
  useEffect(() => {
    applyFilters();
  }, [
    searchName,
    sort,
    searchCarrer,
    minPrice,
    maxPrice,
    searchAmount,
    // searchProvince,
    // searchDistrict,
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

  const room = roomFilterData.filter((n) => n._id !== "6452a565c33ced564a4ab3b4");
  const district = listDistrict.filter((n) => n.idprovince._id == searchProvince);
  const ward = listWard.filter((n) => n.iddistrict._id == searchDistrict);

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
              {/* <Sidebar /> */}
              <aside className="col-lg-3">
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
                    <header className="card-header">Nghề nghiệp</header>
                    <div className="collapse show" id="collapse_aside_brands">
                      <div className="card-body">
                        {listCarrer.map((item) => (
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => setSearchCarrer(item._id)}
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
                              onChange={(e) => setSearchProvince(e.target.value)}
                            >
                              <option selected>Chọn Thành Phố</option>
                              {listProvince.map((item) => (
                                <option value={item._id}>{item.provincename}</option>
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
                              onChange={(e) => setSearchDistrict(e.target.value)}
                            >
                              <option selected>Chọn Quận/Huyện</option>
                              {district.map((item) => (
                                <option value={item._id}>{item.districtname}</option>
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
                                <option value={item._id}>{item.wardname}</option>
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
                          <div className="col-6">
                            <label for="min" className="form-label">
                              Nhỏ nhất
                            </label>
                            <input
                              className="form-control"
                              id="min"
                              placeholder="0"
                              type="number"
                              style={{ boxShadow: "#000" }}
                              onChange={(e) => setMinPrice(e.target.value)}
                            />
                          </div>

                          <div className="col-6">
                            <label for="max" className="form-label">
                              Lớn nhất
                            </label>
                            <input
                              className="form-control"
                              id="max"
                              placeholder="500.000"
                              type="number"
                              onChange={(e) => setMaxPrice(e.target.value)}
                            />
                          </div>
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
                              onChange={(e) => setSearchAmount(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              {/* <ListItem /> */}
              <main className="col-lg-9">
                <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                  <strong className="d-block py-2">
                    {room.length} tổng số phòng tìm được{" "}
                  </strong>
                  <div className="ms-auto">
                    <div className="d-inline-block w-auto me-1">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Tìm kiểm theo tên"
                        onChange={(e) => setSearchName(e.target.value)}
                      />
                    </div>
                    <select className="form-select d-inline-block w-auto me-1"  onChange={(e) => setSort(e.target.value)}>
                      <option value="0">Tùy chọn</option>
                      <option value="1">Giá thấp đến cao</option>
                      <option value="2">Giá cao đến thấp</option>
                    </select>
                    <div className="d-inline-block w-auto me-1">
                      <button
                        type="button"
                        class="btn btn-primary"
                        style={{ marginBottom: "5px" }}
                      >
                        Tìm vị trí gần khu vực
                      </button>
                    </div>
                  </div>
                </header>
                <div>
                  {room.map((item) => (
                    <ItemGrid
                      _id={item._id}
                      mainimage={item.mainimage}
                      careername={item.idcareer.careername}
                      subject={item.subject}
                      price={item.price}
                      content={"phòng ngủ sẽ phù hợp với việc đi làm xa"}
                      amount={"5"}
                      date={"03/04/2023"}
                    />
                  ))}
                </div>
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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
