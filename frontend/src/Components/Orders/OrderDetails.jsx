import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeFromOrder } from "../../Redux/Actions/orderActions"

const OrderDetails = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch = useDispatch()
    const removeItem = (id) => {
        dispatch(removeFromOrder(id))
    }
    return (
        <div>
            <div className="flex py-4 bg-white pb-6">
                <div className="m-5   w-[110px] h-[110px] flex flex-col">
                    <img src={item.url} alt="img" className="w-full h-full object-contain" />
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
                    <div className="py-2 flex gap-2 font-semibold">
                    <button onClick={()=>removeItem(item.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
