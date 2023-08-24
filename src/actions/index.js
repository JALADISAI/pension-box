import { 
    GET_PRODUCT_LIST, 
    GET_CAT_LIST,
    GET_FILTERED_LIST,
    GET_FILTERED_ITEMS,
    GET_PRODUCT_DETAILS,
    GET_SAVE_DETAILS,
    GET_ITEMID
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


export const  getproductDetailsApiData = (data)  => {
     return{
        type: GET_PRODUCT_DETAILS,
          data
          
     }

}


export  const saveviewDetails = (data) => {
    return {
        type: GET_SAVE_DETAILS,
        data
        
    }

}

export  const saveItemID = (data) => {
    return {
        type: GET_ITEMID,
        data
        
    }
}
