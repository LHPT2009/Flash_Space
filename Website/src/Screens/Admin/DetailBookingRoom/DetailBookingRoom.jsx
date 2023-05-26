import { useEffect, useState } from "react";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailPermission = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [total, setTotal] = useState();
  const [staticbk, setStatic] = useState();

  const loadbookingroom = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/bookingroom/loadid/${id}`
      )
      .then((res) => {
        setName(
          `${res.data.idaccount.firstname} ${res.data.idaccount.lastname}`
        );
        setDate(res.data.date);
        setTotal(res.data.total);
        setStatic(res.data.static);
      });
  };

  useEffect(() => {
    loadbookingroom();
  }, []);

  const formatdate = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10
        ? `0${getdate.getMonth() + 1}`
        : getdate.getMonth() + 1;
    const year = getdate.getFullYear();
    return `${day}-${month}-${year}`;
  };

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
                    <h4 className="card-title">Chi tiết đơn đặt</h4>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Mã đơn</label>
                        <input
                          type="text"
                          className="form-control"
                          value={id}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">
                          Tên người đặt đơn
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Ngày đặt</label>
                        <input
                          type="text"
                          className="form-control"
                          value={date}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputUsername1">Tổng tiền</label>
                        <input
                          type="text"
                          className="form-control"
                          value={total}
                          disabled
                        />
                      </div>
                      {staticbk == 0 ? (
                        <div className="form-group">
                          <label for="exampleInputUsername1">Trạng thái</label>
                          <button
                            className="form-control btn btn-warning btn-fw m-1"
                            disabled
                          >
                            Đã gửi
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      {staticbk == 1 ? (
                        <div className="form-group">
                          <label for="exampleInputUsername1">Trạng thái</label>
                          <button
                            className="form-control btn btn-success btn-fw m-1"
                            disabled
                          >
                            Đặt thành công
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                      {staticbk == 2 ? (
                        <div className="form-group">
                          <label for="exampleInputUsername1">Trạng thái</label>
                          <button
                            className="form-control btn btn-danger btn-fw m-1"
                            disabled
                          >
                            Hủy đơn đặt
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      <Link className="btn btn-light" to={"/bookingroom"}>
                        Trở lại
                      </Link>
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
