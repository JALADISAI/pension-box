import { GET_PRODUCT_LIST, GET_CAT_LIST, GET_FILTERED_LIST, GET_FILTERED_ITEMS } from "../types";

const initialState = {
    list: [],
    catList: [],
    filteredList: [],
    filteredItems: []
}

export default function productListReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT_LIST: {
            return {
                ...state,
                list: action.data,
                filteredList: action.data
            }
        }
        case GET_CAT_LIST: {
            return {
                ...state,
                catList: action.data
            }
        }
        case GET_FILTERED_LIST: {
            return {
                ...state,
                filteredList: action.data
            }
        }
        case GET_FILTERED_ITEMS: {
            return {
                ...state,
                filteredItems: action.data
            }
        }
        default:
            return state
    }
}
