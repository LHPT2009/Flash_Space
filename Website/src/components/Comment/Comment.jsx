import "./Comment.css";
const Comment = () => {
  return (
    <div className="bodymc">
      <div class="cardmc">
        <div class="row">
          <div class="col-12">
            <div class="comment-box ml-2">
              <h4>Add a comment</h4>

              <div class="rating">
                <input type="radio" name="rating" value="5" id="5" />
                <label for="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" />
                <label for="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" />
                <label for="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" />
                <label for="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" />
                <label for="1">☆</label>
              </div>

              <div class="comment-area">
                <textarea
                  class="form-control"
                  placeholder="what is your view?"
                  rows="4"
                ></textarea>
              </div>

              <div class="comment-btns mt-2">
                <button class="btn btn-success send btn-sm">
                  Send <i class="fa fa-long-arrow-right ml-1"></i>
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
