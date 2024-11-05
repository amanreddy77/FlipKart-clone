
import axios from "axios";
import * as actionTypes from "../Constants/cartConstant.js";
const URL = "https://flipkart-clone-s4zl.onrender.com";
export const addToCart =(id,quantity)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({
            type:actionTypes.ADD_TO_CART,
            payload:{...data,quantity}
        })
    } catch (error) {
        dispatch({
            type:actionTypes.ADD_TO_CART_FAIL,
            payload:error.message
        })
    }
}
export const removeFromCart =(id)=>async(dispatch)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })
}