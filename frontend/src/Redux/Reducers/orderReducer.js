import * as actionTypes from '../Constants/orderConstants';

export const orderReducer = (state = { orderItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_ORDER:
        const item = action.payload;
        const existItem = state.orderItems.find((product) => product.id === item.id);
        if (existItem) {
            return {
            ...state,
            orderItems: state.orderItems.map((data) =>
                data.product === existItem.product ? item : data
            ),
            };
        } else {
            return {
            ...state,
            orderItems: [...state.orderItems, item],
            };
        }
        case actionTypes.REMOVE_FROM_ORDER:
        return {
            ...state,
            orderItems: state.orderItems.filter((product) => product.id !== action.payload),
        };
        default:
        return state;
    }
    };