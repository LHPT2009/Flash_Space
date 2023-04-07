import ItemGridFavourite from "./ItemGridFavourite";

const ListItem = () => {
  return (
    <div className="container">
      <main className="col-lg-12 m-3">
        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong className="d-block py-2">
            2 tổng số phòng yêu thích của bạn{" "}
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
        <div>
          <ItemGridFavourite />
          <ItemGridFavourite />
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
  );
};

export default ListItem;
