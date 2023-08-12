import { baseURL } from "../config";

export const getproductListData = async () => {
    const res = await fetch(`${baseURL}/products `);
    const data = await res.json();
    return data
}