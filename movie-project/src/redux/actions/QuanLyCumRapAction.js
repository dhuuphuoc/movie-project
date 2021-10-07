import { request } from "../../API/request"
import { SET_LIST_MOVIE } from "../type/QuanLyCumRapType"
import { GET_MOVIE_INFO_LIST } from "../type/QuanLyPhongVeType"

export const setMovieList =(maPhim)=>{
    return dispatch =>{
        request({
            url:"https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim",
            method: "GET",
            params:{
                maPhim
            }
        })
        .then((res) =>{
            dispatch({
                type: SET_LIST_MOVIE,
                payload: res.data.content
            })
        })
        .catch((errors)=>{
            console.log(errors)
        })
    }
}
export const getMovieInfoListAction = () => {
    return dispatch => {
        request({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
            method: "GET",
        })
        .then((res)=>{
            console.log("🚀 ~ file: QuanLyCumRapAction.js ~ line 33 ~ .then ~ console.log(res.data.content)", console.log(res.data.content))
            dispatch({
                type: GET_MOVIE_INFO_LIST,
                payload:res.data.content
            })
        })
        .catch((errors)=>{
            console.log(errors)
        })
    }
}