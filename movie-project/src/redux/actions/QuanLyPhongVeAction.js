import { request } from "../../API/request"
import { ThongTinDatVe } from "../../_core/modules/ThongTinDatVe"
import { SET_TAB } from "../type/QuanLyCumRapType"
import { BOOKING_DONE, LIST_OFFICE } from "../type/QuanLyPhongVeType"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction"


export const setOfficeList = (maLichChieu) => {
    return dispatch => {
        request({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe",
            method: "GET",
            params: {
                maLichChieu
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: LIST_OFFICE,
                        payload: res.data.content
                    })
                }
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}


export const bookingTitketAction = (thongTinDatVe = new ThongTinDatVe) => {
    return dispatch => {
        request({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            method: "POST",
            body: thongTinDatVe
        })
            .then(async (res) => {
                await dispatch(displayLoadingAction)
                await dispatch(setOfficeList(thongTinDatVe.maLichChieu))
                await dispatch({
                    type: BOOKING_DONE
                })
                await dispatch(hideLoadingAction)
                dispatch({ type: SET_TAB })
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}
