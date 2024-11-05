import axios from "axios";
import * as actionTypes from "../Constants/favouritesConstant.js";


const URL= "https://flipkart-clone-s4zl.onrender.com";
export const addToFavourites = (id, quantity) => async (dispatch) => {
    try {
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({
            type: actionTypes.ADD_TO_FAVOURITES,
            payload: { ...data, quantity }
        });
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_TO_FAVOURITES_FAIL,
            payload: error.message
        });
    }
}
export const removeFromFavourites = (id) => async (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_FAVOURITES,
        payload: id
    });
}