import { SET_LIST_MOVIE } from "../type/QuanLyCumRapType"

const stateDefault ={
    filmDetail:{}
}

const QuanLyCumRapReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case SET_LIST_MOVIE:{
            state.filmDetail = action.payload
            return { ...state }
        }
        default: 
        return {...state}
    }
}

export default QuanLyCumRapReducer