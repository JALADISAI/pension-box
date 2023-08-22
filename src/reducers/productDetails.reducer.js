import { GET_PRODUCT_DETAILS } from "../types";

const initialState = {
    
    productDetailsApiResult: ''
}

export default function productDetailsReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetailsApiResult: action.data,
            }
        default:
            return state
    }
}

