import "./Reset.css";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="bodylogin">
      <div class="container">
        <div class="cardlogin">
          <div class="row g-0">
            <div class="col-md-6">
              <div
                class="d-flex justify-content-center align-items-center"
                style={{ height: "450px" }}
              >
                <div class="py-4 px-3 w-75">
                  <h4>Reset</h4>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <div class="input-field">
                        <input class="form-control" id="input3" required />
                        <label for="input3">Email</label>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <button class="btn btn-primary w-100 signup-button">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-side-content">
                <div class="content d-flex flex-column">
                  <h6>Explore you activity</h6>
                  <span>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </span>
                </div>
                <div class="right-side">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <img src="https://i.imgur.com/kWmyZvb.jpg" />
                  </span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <img src="https://i.imgur.com/U0863iD.jpg" />
                  </span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parallelogram">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Reset;
