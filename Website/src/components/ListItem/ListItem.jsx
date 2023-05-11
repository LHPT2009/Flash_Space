import axios from "axios";
import { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";

const ListItem = () => {
  const [roomData, setRoomData] = useState([]);
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
      });
  }, []);

  const room = roomData.filter((n) => n._id !== "6452a565c33ced564a4ab3b4");


  return (
    <main className="col-lg-9">
      <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">{room.length} tổng số phòng tìm được </strong>
        <div className="ms-auto">
          <div className="d-inline-block w-auto me-1">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Tìm kiểm theo tên"
            />
          </div>
          <select className="form-select d-inline-block w-auto me-1">
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
        ;
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
  );
};

export default ListItem;
