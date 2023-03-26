import "./ItemGridHistory.css";

const ItemGrid = () => {
  return (
    <div class="card" style={{ maxWidth: "100%" }}>
      <div class="row">
        <div class="col-sm-6">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            class="card-img h-100"
            alt="..."
          />
        </div>
        <div class="col-sm-6 d-flex flex-column">
          <div class="card-body" style={{ padding: "15px" }}>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGrid;
