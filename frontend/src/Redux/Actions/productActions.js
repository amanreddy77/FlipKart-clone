import axios from "axios";
import * as actionTypes from "../Constants/productConstant";
const URL = "https://flipkart-clone-s4zl.onrender.com";
export const getProducts =()=> async(dispatch) =>{
    try {
        const {data} =await axios.get(`${URL}/products`);
        dispatch({type: actionTypes.Get_Products_Success,payload:data})
    } catch (error) {
        dispatch({type: actionTypes.Get_Products_Failure,payload: error})
    }
}
export const getProductDetails =(id)=> async(dispatch) =>{
    try {
        dispatch({type: actionTypes.Get_Products_Details_Request})
        const {data} =await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.Get_Products_Details_Success,payload:data})
    } catch (error) {
        dispatch({type: actionTypes.Get_Products_Details_Failure,payload: error})
    }
}
