import { useState } from "react";
import "./Comment.css";
import axios from "axios";
const Comment = (props) => {
  const [point, setPoint] = useState(0);
  const [content, setContent] = useState("");
  const addrate = async () => {
    const add = await axios
      .post(
        `${
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}`
            : `http://localhost:8000`
        }/evaluate`,
        {
          idaccount: props.idaccount,
          idroom: props.idroom,
          idbookingroom: props.idbookingroom,
          point: point,
          content: content,
        }
      )
      .then((res) => {
        alert("cảm ơn bạn đã đánh giá!");
      });
  };

  return (
    <div className="bodymc">
      <div class="cardmc">
        <div class="row">
          <div class="col-12">
            <div class="comment-box ml-2">
              <h4 className="text-black">Đánh giá của bạn</h4>

              <div class="rating">
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  id="5"
                  onChange={(e) => setPoint(e.target.value)}
                />
                <label for="5">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  id="4"
                  onChange={(e) => setPoint(e.target.value)}
                />
                <label for="4">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  id="3"
                  onChange={(e) => setPoint(e.target.value)}
                />
                <label for="3">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  id="2"
                  onChange={(e) => setPoint(e.target.value)}
                />
                <label for="2">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  id="1"
                  onChange={(e) => setPoint(e.target.value)}
                />
                <label for="1">☆</label>
              </div>

              <div class="comment-area">
                <textarea
                  class="form-control"
                  placeholder="Bạn cảm thấy như thế nào trong quá trình sử dụng?"
                  rows="4"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <div class="comment-btns mt-2">
                <button class="btn btn-primary send btn-sm" onClick={addrate}>
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
