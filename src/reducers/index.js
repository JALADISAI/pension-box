import { combineReducers } from "@reduxjs/toolkit";
import productListReducer from "./productList.reducer";
import productDetailsReducer from "./productDetails.reducer";

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

export default reducers