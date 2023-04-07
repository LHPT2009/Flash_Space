import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="col-lg-3">
      <button
        className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#aside_filter"
      >
        Bộ lọc
      </button>
      <div id="aside_filter" className="collapse card d-lg-block mb-5">
        <article className="filter-group">
          <header className="card-header">Lĩnh vực</header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Công nghệ </span>
              </label>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">Khu vực</header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Công nghệ </span>
              </label>
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
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">Khung giờ</header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Công nghệ </span>
              </label>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">Trang thiết bị</header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Công nghệ </span>
              </label>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
