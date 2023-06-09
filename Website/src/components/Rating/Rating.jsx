import axios from "axios";
import "./Rating.css";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Pagination from "../../components/Pagination/Pagination";

const Rating = (props) => {
  const change = 0;
  const [listrate, setListRate] = useState([]);
  const loadlistrate = async () => {
    const load = await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate/list/${props.idroom}`
      )
      .then((res) => {
        setListRate(res.data);
      });
  };
  useEffect((item) => {
    loadlistrate();
  }, []);

  const dateformat = (date) => {
    const getdate = new Date(date);
    const day =
      getdate.getDate() < 10 ? `0${getdate.getDate()}` : getdate.getDate();
    const month =
      getdate.getMonth() < 10 ? `0${getdate.getMonth()}` : getdate.getMonth();
    const year = getdate.getFullYear();
    return day + "/" + month + "/" + year;
  };
  const arrfilter = listrate.filter((item) => item.static == 1).reverse();
  const sumrate = arrfilter.length;
  const calrate = (number) => {
    let numbercal = (number / sumrate) * 100;
    return numbercal;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arrfilter.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div class="row">
      <div class="col-md-offset-1 col-md-12 col-sm-12 main-section">
        <div class="col-md-12">
          <h3>Đánh giá</h3>
          <hr />
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12 rating-part-left text-center">
            <h6>Tổng đánh giá:</h6>
            <h1>{arrfilter.length}</h1>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-12">
            <div className="row">
              <div className="col-2 rating-part-right text-end">
                <i class="fa fa-star" aria-hidden="true">
                  <span>5</span>
                </i>
              </div>
              <div className="col-8">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${calrate(
                        arrfilter.filter((item) => item.point == 5).length
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-2 rating-part-right text-start">
                <span>{`(${
                  arrfilter.filter((item) => item.point == 5).length
                })`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-2 rating-part-right text-end">
                <i class="fa fa-star" aria-hidden="true">
                  <span>4</span>
                </i>
              </div>
              <div className="col-8">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${calrate(
                        arrfilter.filter((item) => item.point == 4).length
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-2 rating-part-right text-start">
                <span>{`(${
                  arrfilter.filter((item) => item.point == 4).length
                })`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-2 rating-part-right text-end">
                <i class="fa fa-star" aria-hidden="true">
                  <span>3</span>
                </i>
              </div>
              <div className="col-8">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${calrate(
                        arrfilter.filter((item) => item.point == 3).length
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-2 rating-part-right text-start">
                <span>{`(${
                  arrfilter.filter((item) => item.point == 3).length
                })`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-2 rating-part-right text-end">
                <i class="fa fa-star" aria-hidden="true">
                  <span>2</span>
                </i>
              </div>
              <div className="col-8">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${calrate(
                        arrfilter.filter((item) => item.point == 2).length
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-2 rating-part-right text-start">
                <span>{`(${
                  arrfilter.filter((item) => item.point == 2).length
                })`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-2 rating-part-right text-end">
                <i class="fa fa-star" aria-hidden="true">
                  <span>1</span>
                </i>
              </div>
              <div className="col-8">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${calrate(
                        arrfilter.filter((item) => item.point == 1).length
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-2 rating-part-right text-start">
                <span>{`(${
                  arrfilter.filter((item) => item.point == 1).length
                })`}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <hr />
            <h3>Từ phía người dùng</h3>
            <hr />
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            {currentPosts.map((item) => (
              <div className="row m-2">
                <div className="col-2 text-end">
                  <img
                    src={`${
                      process.env.REACT_APP_URL
                        ? `${process.env.REACT_APP_URL}`
                        : `http://localhost:8000`
                    }/singleimage/${item.idaccount.avatar}`}
                    className="rounded-circle"
                    width="110px"
                    height="110px"
                  />
                </div>
                <div className="col-10 text-start">
                  <small>{dateformat(item.date)}</small>
                  <br />
                  <strong>
                    {item.idaccount.firstname} {item.idaccount.lastname}
                  </strong>
                  <br />
                  {item.content}
                  <br />
                  <ReactStars
                    count={5}
                    value={item.point}
                    size={24}
                    isHalf={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={arrfilter.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
