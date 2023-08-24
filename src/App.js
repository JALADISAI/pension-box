import React,{useState} from "react";
import ProductList from './components/productList';
import ProductDetails from './components/ProductDetails';
import './components/ProductDetails.css';
import { useDispatch } from "react-redux";
import { saveviewDetails } from "./actions";
function App() {
  const dispatch = useDispatch();
  const [viewDetails, setviewDetails] = useState(false);
  const [ itemId, setItemId] = useState('');
  const handleViewDetailsClick = (id) => {
    setItemId(id);
    setviewDetails(true);
    dispatch(saveviewDetails(true));
  }
  console.log("viewDetails",viewDetails);
  return (
    <>
        {!viewDetails && <ProductList handleViewDetailsClick={handleViewDetailsClick} />}
        {viewDetails  && <ProductDetails itemId={itemId} />}
    </>
  );
}

export default App;
