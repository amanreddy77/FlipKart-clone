import * as actionType from '../Constants/productConstant'
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.Get_Products_Success:
            return { products: action.payload };
        case actionType.Get_Products_Failure:
            return { error: action.payload };
        default:
            return state;
    }
};
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionType.Get_Products_Details_Request:
            return { loading: true };
        case actionType.Get_Products_Details_Success:
            return {loading:false, product: action.payload };
        case actionType.Get_Products_Details_Failure:
            return {loading:false, error: action.payload };
        case actionType.Get_Products_Details_Reset:
            return { product: {} };
        default:
            return state;
    }
}