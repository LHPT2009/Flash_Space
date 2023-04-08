import ItemGrid from "./ItemGrid";

const ListItem = () => {
  return (
    <main className="col-lg-9">
      <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">32 tổng số phòng tìm được </strong>
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
            <option value="0">Mới nhất</option>
            <option value="1">Giá thấp đến cao</option>
            <option value="2">Giá cao đến thấp</option>
            <option value="3">Đánh giá</option>
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
        <ItemGrid
          image={
            "https://i.pinimg.com/736x/e6/a6/74/e6a674054e1a7e109e2bbf169c2aa9d3--vans-gardens.jpg"
          }
          cate={"Phòng ngủ"}
          name={"Khách sạn Villa ngàn sao"}
          price={"500.000"}
          content={"phòng ngủ sẽ phù hợp với việc đi làm xa"}
          amount={"5"}
          date={"03/04/2023"}
        />
        <ItemGrid
          image={
            "https://cflymusic.com/wp-content/uploads/2021/11/IMG_6559-scaled-e1636982901468.jpg"
          }
          cate={"Phòng ngủ"}
          name={"Lớp học nhạc cụ"}
          price={"250.000"}
          content={"bạn sẽ có không gian học nhạc cụ mà mình yêu thích"}
          amount={"15"}
          date={"03/04/2023"}
        />
        <ItemGrid
          image={
            "https://shop.kientruc.com/uploads/images/886290221504553/images/845166942283548_1471155222.jpg"
          }
          cate={"Phòng ngủ"}
          name={"Penhouse Quận 1"}
          price={"500.000"}
          content={"Đầy đủ tiện nghi và vô cùng thoáng mát"}
          amount={"5"}
          date={"03/04/2023"}
        />
        <ItemGrid
          image={
            "https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-photography-of-workplace-meeting-room-image_1056199.jpg"
          }
          cate={"Văn phòng"}
          name={"Phòng họp của công ty"}
          price={"400.000"}
          content={"phòng họp thoáng mái sạch sẽ"}
          amount={"5"}
          date={"03/04/2023"}
        />
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
