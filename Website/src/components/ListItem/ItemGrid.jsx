const ItemGrid = () => {
  return (
    <div class="card mb-3" style={{ maxWidth: "100%" }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            class="card-img"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGrid;
