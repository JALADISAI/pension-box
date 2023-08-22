import React, { useEffect,useState } from "react";
 import { getproductionDetails } from "../apis/index";
import { useDispatch ,useSelector} from "react-redux";
import { getproductDetailsApiData } from "../actions";
  const ProductDetails = (props) => {
   const productDetailsData = useSelector((state)=>state.productDetails.productDetailsApiResult)
console.log("productdata", productDetailsData);
 const dispatch = useDispatch();
 const getDetails = async () =>{
   const data = await getproductionDetails(props.itemId);
   dispatch(getproductDetailsApiData(data));
   const catListData = [];
}
useEffect(() => {
   getDetails();
}, [])
    return(
            <div>
                 <div className="container">
                     <div className="image" >
                        <img src = {productDetailsData.image}/>
                     </div>
                     <div className="text" >
                        <h4>{productDetailsData.description}</h4>
                        <div>{productDetailsData.price}</div>  
                     </div>
                 </div>
            </div>
    
    
    )
    

}
 

 export default ProductDetails;

