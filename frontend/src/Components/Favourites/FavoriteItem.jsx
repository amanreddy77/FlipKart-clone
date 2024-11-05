import { useDispatch } from "react-redux";
import { removeFromFavourites } from "../../Redux/Actions/favouritesActions"; // Make sure to import the appropriate action
import { addEllipsis } from "../../utils/commonUtils";
import {DeleteOutlineOutlined,ShoppingCartOutlined}from '@mui/icons-material';
import { addToCart } from "../../Redux/Actions/cartActions";
import { useState } from "react";
const FavoriteItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const {id} =item
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
    }
    const removeItemFromFavorites = (id) => {
        dispatch(removeFromFavourites(id));
    };

    return (
        <div className=" py-4 bg-white pb-4 px-2 shadow-md rounded-md ">
            <div className="block justify-center items-center">
            <div className=" w-[110px] h-[110px] flex flex-col justify-center items-center m-auto">
                <img src={item.url} alt="img" className="w-full h-full object-contain" />
            </div>
            <div className="py-1">
                <h2>{addEllipsis(item.title.longTitle)}</h2>
            </div>
            <div className="py-1">
                <p className="flex items-center gap-2 text-[#878787]">Seller: RetailNet
                    <div>
                        <img src={fassured} alt="fa" className="w-20" />
                    </div>
                </p>
            </div>
            <div className="py-1">
                <p className="flex items-baseline gap-2 py-2">
                    <span className="text-xl font-semibold">₹{item.price.cost}</span>
                    <span className="line-through text-[#878787]">₹{item.price.mrp}</span>
                    <span className="text-[#388E3c]">₹{item.price.discount} off</span>
                </p>
            </div>
            <div className="py-2 flex gap-2 font-semibold justify-around items-center shadow-inner">
                <button onClick={addItemToCart} className="flex justify-center items-center text-[#388E3c] "><ShoppingCartOutlined/></button>
                <button onClick={() => removeItemFromFavorites(item.id)} className="flex justify-center items-center text-red-600"><DeleteOutlineOutlined/></button>
            </div>
            </div>
        </div>


    );
};

export default FavoriteItem;
