import { request } from "../../API/request"
import { SET_LIST_MOVIE } from "../type/QuanLyCumRapType"

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