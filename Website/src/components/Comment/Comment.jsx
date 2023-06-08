import { useEffect, useState } from "react";
import "./Comment.css";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

const Comment = (props) => {
  const [point, setPoint] = useState(0);
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const loadrate = async () => {
    await axios
      .get(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate/${props.idbookingroom}`
      )
      .then((res) => {
        setPoint(res.data.point);
        setContent(res.data.content);
        setId(res.data._id);
      });
  };

  useEffect(() => {
    loadrate();
  }, []);

  const changepoint = (number) => {
    setPoint(number);
  };
  const updaterate = async () => {
    const update = await axios
      .put(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate/${id}`,
        {
          idaccount: props.idaccount,
          idroom: props.idroom,
          idbookingroom: props.idbookingroom,
          point: point,
          content: content,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Cảm ơn bạn đã đánh giá!",
          text: "Đánh giá của bạn đã được lưu.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="bodymc">
      <div class="cardmc">
        <div class="row">
          <div class="col-12">
            <div class="comment-box ml-2">
              <h4 className="text-black">Đánh giá của bạn</h4>
              <ReactStars
                key={`stars_${point}`}
                value={Math.max(0, point)}
                count={5}
                size={24}
                isHalf={false}
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                onChange={changepoint}
              />
              <div class="comment-area">
                <textarea
                  class="form-control"
                  placeholder="Bạn cảm thấy như thế nào trong quá trình sử dụng?"
                  rows="4"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <div class="comment-btns mt-2">
                <button
                  class="btn btn-primary send btn-sm"
                  onClick={updaterate}
                >
                  Gửi đánh giá <i class="fa fa-long-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
