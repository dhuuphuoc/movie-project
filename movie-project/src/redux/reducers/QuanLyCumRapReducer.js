import { SET_LIST_MOVIE } from "../type/QuanLyCumRapType"
import { GET_MOVIE_INFO_LIST } from "../type/QuanLyPhongVeType"

const stateDefault ={
    filmDetail:{},
    heThongRapChieu:[],
}

const QuanLyCumRapReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case SET_LIST_MOVIE:{
            state.filmDetail = action.payload
            return { ...state }
        }
        case GET_MOVIE_INFO_LIST:{
            state.heThongRapChieu = action.payload
            return {...state}
        }
        default: 
        return {...state}
    }
}

export default QuanLyCumRapReducer