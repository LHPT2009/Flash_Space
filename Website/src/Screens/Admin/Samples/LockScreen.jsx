const LockScreen = () => {
  return (
    <>
      <div className="container-scroller">
        <div className="page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth lock-full-bg">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-transparent text-left p-5 text-center">
                  <img
                    src="../../images/faces/face13.jpg"
                    className="lock-profile-img"
                    alt="img"
                  />
                  <form className="pt-5">
                    <div className="form-group">
                      <label for="examplePassword1">Password to unlock</label>
                      <input
                        type="password"
                        className="form-control text-center"
                        id="examplePassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-5">
                      <a
                        className="btn btn-block btn-success btn-lg font-weight-medium"
                        href="../../index.html"
                      >
                        Unlock
                      </a>
                    </div>
                    <div className="mt-3 text-center">
                      <a href="#" className="auth-link text-white">
                        Sign in using a different account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockScreen;
