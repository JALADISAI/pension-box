import { 
    GET_PRODUCT_LIST, 
    GET_CAT_LIST,
    GET_FILTERED_LIST,
    GET_FILTERED_ITEMS
 } from "../types";

export const getProductList = data => {
    return {
        type: GET_PRODUCT_LIST,
        data
    }
}

export const getCatList = data => {
    return {
        type: GET_CAT_LIST,
        data
    }
}

export const getFilteredList = data => {
    return {
        type: GET_FILTERED_LIST,
        data
    }
}

export const getFilteredItems = data => {
    return {
        type: GET_FILTERED_ITEMS,
        data
    }
}
