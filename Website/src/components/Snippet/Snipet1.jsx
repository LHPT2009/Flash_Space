import "./Snipet1.css";
const Snipet1 = () => {
  return (
    <div className="m-2">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="mx-auto text-center">
            <img
              src="https://cdn.mos.cms.futurecdn.net/wFzEvUmaoVtNimMMnQSgMR.gif"
              class="rounded"
              alt="..."
              style={{ maxWidth: "800px", maxHeight: "540px" }}
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ps-lg-6 ps-xl-10 w-lg-90">
            <div class="mb-4">
              <div class="main-title title-left">
                FLASH SPACE<span class="line-left"></span>
              </div>
              <h2 class="w-90">Vì sao bạn nên tin tưởng chúng tôi?</h2>
            </div>
            <p class="mb-4">
              Chúng tôi khẳng định rằng mình là một trong nhà cung cấp dịch vụ
              hiếm hoi của thế nói là số ít trong thị trường{" "}
            </p>

            <div id="accordion" class="accordion-style">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Đảm bảo an toàn về thông tin người dùng
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body position-relative">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Tối ưu về quản lý
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body position-relative">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Quảng cáo mở rộng
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div class="card-body position-relative">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
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

export default Snipet1;
