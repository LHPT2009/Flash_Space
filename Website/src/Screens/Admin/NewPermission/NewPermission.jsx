import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const NewPermission = () => {
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Thêm mới quyền</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tên quyền</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Nhập tên quyền"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary me-2">
                        Thêm
                      </button>
                      <button className="btn btn-light">Trở lại</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewPermission;
