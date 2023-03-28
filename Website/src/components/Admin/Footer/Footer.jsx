const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-wrap">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Tác giả ©{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                FS
              </a>{" "}
              2023
            </span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Chỉ có thể là đội ngũ kỹ sư{" "}
              <a href="https://www.bootstrapdash.com/" target="_blank">
                {" "}
                FLASH SPACE
              </a>{" "}
              của FS
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
