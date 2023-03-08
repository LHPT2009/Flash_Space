import "./Rating.css";
const Rating = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-offset-1 col-md-12 col-sm-12 main-section">
          <div class="col-md-12">
            <h3>Feedback</h3>
            <hr />
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12 rating-part-left text-center">
              <h1>1.3</h1>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <p>Average Rating</p>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "4%" }}
                ></div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 rating-part-right">
              <div class="row">
                <div class="col-md-12">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>70%</span>
                </div>
                <div class="col-md-12">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <span>20%</span>
                </div>
                <div class="col-md-12">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <span>8%</span>
                </div>
                <div class="col-md-12">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <span>4%</span>
                </div>
                <div class="col-md-12">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <span>0%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row review-section">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <hr />
              <h3>Reviews</h3>
              <hr />
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-md-4 col-md-4 col-xs-4 review-part-left">
                  <div class="row">
                    <div
                      class="col-md-5 col-sm-5 col-xs-12"
                      style={{ position: "relative", left: "15px" }}
                    >
                      <img src="https://damyngheninhvan.net/wp-content/uploads/2022/01/hinh-anh-buon-tam-trang-43.jpg" />
                    </div>
                    <div class="col-md-7 col-sm-7 col-xs-12">
                      <p>8 days ago</p>
                      <span>Tom kok</span>
                      <br />
                      <small>Report</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-8 review-part-right">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;