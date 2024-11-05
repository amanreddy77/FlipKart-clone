import * as actionTypes from '../Constants/favouritesConstant';
export const favouritesReducer = (state = { favouritesItems: [] }, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_FAVOURITES:
            const item = action.payload;
            const existItem = state.favouritesItems.find(product => product.id === item.id);
            if(existItem){
                return{
                    ...state,
                    favouritesItems: state.favouritesItems.map(data => data.product === existItem.product ? item : data),
                };
            }else{
                return{
                    ...state,
                    favouritesItems: [...state.favouritesItems,item],
                };
            }
        case actionTypes.REMOVE_FROM_FAVOURITES:
            return{
                ...state,
                favouritesItems: state.favouritesItems.filter(product => product.id !== action.payload),
            };
        default :
            return state;
    }
}