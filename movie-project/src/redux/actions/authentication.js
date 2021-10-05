import { request } from "../../API/request";
import { createAction } from "./index";
import { actionTypes } from "./types";

export const signIn = (loginInfo, callback) => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      body: loginInfo,
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_ME, res.data.content));
        localStorage.setItem("token", res.data.content.accessToken);
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMe = (dispatch) => {
  request({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    method: "POST",
  })
    .then((res) => {
      dispatch(createAction(actionTypes.SET_ME, res.data));
    })
    .catch();
};
