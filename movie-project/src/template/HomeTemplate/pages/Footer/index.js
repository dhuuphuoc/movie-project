import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <AppBar position="static" color="primary" className="footer">
      <Container maxWidth="lg">
        <Toolbar className="row">
          <div className="footer-item col-3">
            <h3 className="title-item">GIỚI THIỆU</h3>
            <ul>
              <li>
                <a href>Về chúng tôi</a>
              </li>
              <li>
                <a href>Thỏa thuận sử dụng</a>
              </li>
              <li>
                <a href>Quy chế hoạt động</a>
              </li>
              <li>
                <a href>Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-3">
            <h3 className="title-item">GÓC ĐIỆN ẢNH</h3>
            <ul>
              <li>
                <a href>Thể loại phim</a>
              </li>
              <li>
                <a href>Bình luận phim</a>
              </li>
              <li>
                <a href>Blog điện ảnh</a>
              </li>
              <li>
                <a href>Phim hay của tháng</a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-3">
            <h3 className="title-item">KẾT NỐI</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <a href>
                  <i class="fab fa-facebook-square"></i>FACEBOOK
                </a>
              </li>
              <li>
                <a href>
                  <i class="fab fa-instagram"></i>INSTAGRAM
                </a>
              </li>
              <li>
                <a href>
                  <i class="fab fa-twitter"></i>TWITTER
                </a>
              </li>
              <li>
                <a href>
                  <i class="fab fa-line"></i>LINE
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item col-3">
            <img
              src="./assets/bo-cong-thuong.png"
              style={{ width: "100%" }}
            ></img>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
