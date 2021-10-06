import { ThongTinLichChieu } from "../../_core/modules/ThongTinPhongVe";
import { SET_TAB } from "../type/QuanLyCumRapType";
import { LIST_OFFICE, BOOKING, BOOKING_DONE} from "../type/QuanLyPhongVeType";


const stateDefault ={
    detailOfficeMovie: new ThongTinLichChieu(),
    danhSachGheDangDat:[],
    tabActive: "1",
}

const QuanLyPhongVeReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case LIST_OFFICE:{
            state.detailOfficeMovie = action.payload
            console.log(action.payload)
            return {...state}
        }
        case BOOKING :{
            let danhSachGheCapNhap = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhap.findIndex((gheDD)=> gheDD.maGhe === action.payload.maGhe)
            if(index != -1){
                danhSachGheCapNhap.splice(index, 1);
            }else{
                danhSachGheCapNhap.push(action.payload)
            }
            return {...state, danhSachGheDangDat: danhSachGheCapNhap}
        }
        case BOOKING_DONE:{
            state.danhSachGheDangDat = [];
            return {...state}
        }
        case SET_TAB: {
            state.tabActive = action.payload
            return { ...state }
        }
        default:
            return {...state}
    }
}

export default QuanLyPhongVeReducer