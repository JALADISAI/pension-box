
import { GET_PRODUCT_LIST, GET_CAT_LIST, GET_FILTERED_LIST,
     GET_FILTERED_ITEMS,GET_ITEMID,  GET_VIEW_DETAILS } from "../types";

const initialState = {
    list: [],
    catList: [],
    filteredList: [],
    filteredItems: [],

    
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
         
        case GET_VIEW_DETAILS: {
            return {
         ... state,
         viewdetails: action.data 
         
     }
    }
          case GET_ITEMID: {
          return {
             ...state,
             itemid: action.data
          }
        } 
        default:
            return state
    }
}
