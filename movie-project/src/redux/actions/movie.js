import { request } from "../../API/request";
import { createAction } from "./index";
import { actionTypes } from "./types";

export const getMovieBanner = () => {
  return (dispatch) => {
    request({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(actionTypes.SET_MOVIE_BANNER, res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
