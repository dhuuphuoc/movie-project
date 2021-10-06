import { request } from "../../API/request";
import { INFO_ACCOUNT } from "../type/QuanLyTaiKhoanType";
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
        localStorage.setItem("t", res.data.content.accessToken);
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
      dispatch(createAction(actionTypes.SET_ME, res.data.content));
    })
    .catch();
};


export const getAccoutInfo = dispatch =>{
  request({
    url:"https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    method: "POST",
  })
  .then((res)=>{
    if(res.data.statusCode === 200){
      dispatch({
        type: INFO_ACCOUNT,
        payload: res.data.content
      })
    }
  })
  .catch((errors)=>{
    console.log(errors)
  })
}