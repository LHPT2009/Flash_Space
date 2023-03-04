import { useState } from "react";
import ItemCard from "./ItemCard";
import ItemGrid from "./ItemGrid";

const ListItem = () => {
  const [change, setChange] = useState(false);
  return (
    <main className="col-lg-9">
      <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong className="d-block py-2">32 Items found </strong>
        <div className="ms-auto ">
          <select className="form-select d-inline-block w-auto me-1">
            <option value="0">Best match</option>
            <option value="1">Recommended</option>
            <option value="2">High rated</option>
            <option value="3">Randomly</option>
          </select>
          <div className="btn-group">
            {change == false ? (
              <div>
                <a
                  href="#"
                  className="btn btn-light"
                  data-bs-toggle="tooltip"
                  title="List view"
                  onClick={() => setChange(true)}
                >
                  <i className="fa fa-bars"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light active"
                  data-bs-toggle="tooltip"
                  title="Grid view"
                  onClick={() => setChange(false)}
                >
                  <i className="fa fa-th"></i>
                </a>
              </div>
            ) : (
              <div>
                <a
                  href="#"
                  className="btn btn-light active"
                  data-bs-toggle="tooltip"
                  title="List view"
                  onClick={() => setChange(true)}
                >
                  <i className="fa fa-bars"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light"
                  data-bs-toggle="tooltip"
                  title="Grid view"
                  onClick={() => setChange(false)}
                >
                  <i className="fa fa-th"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      {change == false ? (
        <div className="row">
          <div className="col-md-auto">
            <ItemCard />
          </div>
          <div className="col-md-auto">
            <ItemCard />
          </div>
          <div className="col-md-auto">
            <ItemCard />
          </div>
          <div className="col-md-auto">
            <ItemCard />
          </div>
          <div className="col-md-auto">
            <ItemCard />
          </div>
        </div>
      ) : (
        <div>
          <ItemGrid />
          <ItemGrid />
          <ItemGrid />
          <ItemGrid />
        </div>
      )}
      <hr />
      <footer className="d-flex mt-4">
        <nav className="ms-3">
          <ul className="pagination">
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
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
};

export default ListItem;
