const Sidebar = () => {
  return (
    <aside className="col-lg-3">
      <button
        className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#aside_filter"
      >
        Show filter
      </button>
      <div id="aside_filter" className="collapse card d-lg-block mb-5">
        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside1"
              style={{ textDecoration: "none" }}
            >
              <i className="icon-control fa fa-chevron-down "></i> Related items
            </a>
          </header>
          <div className="collapse show" id="collapse_aside1">
            <div className="card-body">
              <ul className="list-menu" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Electronics{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Accessories{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Home items{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Men's clothing{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Interior items{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Magazines{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Category name{" "}
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                    Home items{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
              style={{ textDecoration: "none" }}
            >
              <i className="icon-control fa fa-chevron-down"></i> Brands
            </a>
          </header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Mercedes </span>
                <b className="badge rounded-pill bg-gray-dark float-end">120</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Toyota </span>
                <b className="badge rounded-pill bg-gray-dark float-end">15</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Mitsubishi </span>
                <b className="badge rounded-pill bg-gray-dark float-end">35</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Nissan </span>
                <b className="badge rounded-pill bg-gray-dark float-end">89</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Honda </span>
                <b className="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Honda accord </span>
                <b className="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
              style={{ textDecoration: "none" }}
            >
              <i className="icon-control fa fa-chevron-down"></i> Price
            </a>
          </header>
          <div className="collapse show" id="collapse_aside2">
            <div className="card-body">
              <input type="range" className="form-range" min="0" max="100" />
              <div className="row mb-3">
                <div className="col-6">
                  <label for="min" className="form-label">
                    Min
                  </label>
                  <input
                    className="form-control"
                    id="min"
                    placeholder="$0"
                    type="number"
                  />
                </div>

                <div className="col-6">
                  <label for="max" className="form-label">
                    Max
                  </label>
                  <input
                    className="form-control"
                    id="max"
                    placeholder="$1,0000"
                    type="number"
                  />
                </div>
              </div>
              <button className="btn btn-light w-100" type="button">
                Apply
              </button>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
              style={{ textDecoration: "none" }}
            >
              <i className="icon-control fa fa-chevron-down"></i> Size
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              <label className="checkbox-btn btn">
                <input type="checkbox" />
                <span className=" mb-1"> XS </span>
              </label>

              <label className="checkbox-btn btn">
                <input type="checkbox" />
                <span className="mb-1"> SM </span>
              </label>

              <label className="checkbox-btn btn">
                <input type="checkbox" />
                <span className="mb-1"> LG </span>
              </label>

              <label className="checkbox-btn btn ">
                <input type="checkbox" />
                <span className="mb-1"> XXL </span>
              </label>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
