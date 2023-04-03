import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";

const DetailPermission = () => {
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
                    <h4 className="card-title">Default form</h4>
                    <p className="card-description">Basic form layout</p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputUsername1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputConfirmPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Confirm Password
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea1"
                          rows="4"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary me-2">
                        Submit
                      </button>
                      <button className="btn btn-light">Cancel</button>
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

export default DetailPermission;
