import { GET_PRODUCT_DETAILS } from "../types";

const initialState = {}

export default function productDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT_DETAILS:
            return action.data
        default:
            return state
    }
}