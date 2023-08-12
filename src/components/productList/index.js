import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, getCatList } from "../../actions";
import { getproductListData } from "../../apis";
import ListProducts from "./ListProducts";

const ProductList = () => {
    const dispatch = useDispatch();
    const getProduct = async () => {
        const data = await getproductListData();
        const catListData = [];
        data.map(item => {
            if(!catListData.includes(item.category)) {
                catListData.push(item.category)
            }
        })
        dispatch(getCatList(catListData))
        dispatch(getProductList(data))
    }

    const productList = useSelector((state) => state.productList?.filteredList || []);
    
    useEffect(() => {
        getProduct();
    }, [])

    return(
        <div>
            <ListProducts productList={productList} />
        </div>
    )
}

export default ProductList