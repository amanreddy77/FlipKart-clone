import { useDispatch } from "react-redux"
import { removeFromCart } from "../../Redux/Actions/cartActions"
import Buttons from "./Buttons"
import { addToFavourites } from "../../Redux/Actions/favouritesActions"
import { useState } from "react"
import { removeFromOrder } from "../../Redux/Actions/orderActions"
import { Snackbar } from "@mui/material"
import {TurnedInNot,DeleteOutlineOutlined} from '@mui/icons-material';

const CartDetails = ({item}) => {
  const [quantity,setQuantity]= useState(1)
  const [open,setOpen]= useState(false)
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const dispatch = useDispatch()
  const addToFavorites = (id) => {
    dispatch(addToFavourites(id, quantity));
    setOpen(true) 
  };
  const removeItem = (id) => {
    dispatch(removeFromCart(id))
    dispatch(removeFromOrder(id))
  }
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  return (
    <div className="flex py-4 bg-white pb-6">
      <div className="m-5   w-[110px] h-[110px] flex flex-col">
        <img src={item.url} alt="img" className="w-full h-full object-contain" />
        <Buttons onQuantityChange={handleQuantityChange}/>
      </div>
      <div className="py-1">
        <h2>{item.title.longTitle}</h2>
        <p className="flex items-center gap-2 text-[#878787]">Seller: RetailNet 
                <div>
                    <img src={fassured} alt="fa" className="w-20"/>
                </div>
        </p>
        <p className="flex items-baseline gap-2 py-2">
                <span className="text-xl font-semibold">₹{item.price.cost}</span>
                <span className="line-through text-[#878787]">₹{item.price.mrp}</span>
                <span className="text-[#388E3c]">₹{item.price.discount} off</span>
        </p>
        <div className="py-2 flex gap-2 font-semibold items-center">
          <button onClick={() => addToFavorites(item.id)} className="flex justify-center items-center gap-1 "> <TurnedInNot className="text-[#388E3c]"/>Save for later</button>
          <button onClick={()=>removeItem(item.id)} className="flex justify-center items-center gap-1"><DeleteOutlineOutlined className="text-[#ff4f4f]"/> Remove</button>
          <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={()=>setOpen(false)}
                message="Item Added to Wishlist!"
                severity="success"
            />
        </div>
      </div>
    </div>
  )
}

export default CartDetails