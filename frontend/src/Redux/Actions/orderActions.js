import axios from "axios";
import * as actionTypes from "../Constants/orderConstants.js"
const URL = "https://flipkart-clone-s4zl.onrender.com";
export const addToOrder = (id,quantity)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({
            type:actionTypes.ADD_TO_ORDER,
            payload:{...data,quantity}
        })
    } catch (error) {
        dispatch({
            type:actionTypes.ADD_TO_ORDER_FAIL,
            payload:error.message
        })
    }
}
export const removeFromOrder = (id)=>async(dispatch)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_ORDER,
        payload:id
    })
}