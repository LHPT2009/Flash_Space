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
        <ItemGrid />
        <ItemGrid />
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
