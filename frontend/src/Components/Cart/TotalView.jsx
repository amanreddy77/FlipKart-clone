import { useEffect, useState } from "react"



const TotalView = ({cartItems}) => {
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0)
  const [couponDiscount,setCouponDiscount]=useState(0)
  const [processingFee,setProcessingFee]=useState(0)
  useEffect(()=>{
    totalPrice();
  },[cartItems])
  const totalPrice=()=>{
    let price=0
    let discount=0
    let couponDiscount=0
    let processingFee=0
    cartItems?.map((item)=>{
      price+=item.price.mrp
      discount+=(item.price.mrp- item.price.cost)
      couponDiscount=50
      processingFee=49
    })
    setPrice(price)
    setDiscount(discount)
    setCouponDiscount(couponDiscount)
    setProcessingFee(processingFee)
    
  }
  const Amount=price-discount-couponDiscount+processingFee
  return (
    <div className="bg-white ">
      <div className="py-4 px-6 shadow-sm ">
        <p className="text-[#878787]">Price Details</p>
      </div>
      <div className="py-4 px-6 ">
        <div className="flex justify-between py-2 ">Price ({cartItems?.length}items)
          <div><span>₹{price}</span></div>
        </div>
        <div className="flex justify-between py-2">Discount
          <div className="text-[#1e9724]"><span>-₹{discount}</span></div>
        </div>
        <div className="flex justify-between py-2">Coupons Applied
          <div className="text-[#1e9724]"><span>-₹{couponDiscount}</span></div>
        </div>
        <div className="flex justify-between py-2 shadow-sm">Processing Fee
          <div><span>₹{processingFee}</span></div>
        </div>
        <div className="flex justify-between py-4 text-lg  font-semibold">Total Price
          <div><span>₹{Amount}</span></div>
        </div>
        <p className="text-[#1e9724]">You will save ₹{discount} on this order</p>
      </div>
    </div>
  )
}

export default TotalView