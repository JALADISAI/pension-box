import React,{useState} from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import ProductList from './components/productList';
import ProductDetails from './components/ProductDetails';
import './components/ProductDetails.css';
const store = configureStore({ reducer: rootReducer });
function App() {
  const [viewDetails, setviewDetails] = useState(false);
  const [ itemId, setItemId] = useState('');
  const handleViewDetailsClick = (id) => {
    setItemId(id);
    setviewDetails(true);
  }
  console.log("viewDetails",viewDetails);
  return (

    <Provider store={store}>
      <>
        {!viewDetails && <ProductList handleViewDetailsClick={handleViewDetailsClick} />}
        {viewDetails  && <ProductDetails itemId={itemId} />}
      </>
      
    </Provider>
  );
}

export default App;
