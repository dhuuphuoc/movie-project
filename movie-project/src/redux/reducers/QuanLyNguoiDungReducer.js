import { INFO_ACCOUNT } from "../type/QuanLyTaiKhoanType"


const stateDefault = {
    userInfo:{},
}

const QuanLyNguoiDungReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case INFO_ACCOUNT:{
            state.userInfo = action.payload
        }
        default:
            return {...state}
    }
}

export default QuanLyNguoiDungReducer