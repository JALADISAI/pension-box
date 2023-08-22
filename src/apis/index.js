import { baseURL } from "../config";

export const getproductListData = async () => {
    const res = await fetch(`${baseURL}/products `);
    const data = await res.json();
    return data
}

 export const getproductionDetails = async (id) => {
  console.log("jask",id);
   const res = await fetch(`${baseURL}/products/${id}`);
   const data = await res.json();
   return data
}
