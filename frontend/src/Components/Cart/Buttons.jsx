import { useState } from "react"

const Buttons = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1)
    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        onQuantityChange(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            onQuantityChange(quantity - 1);
        }
    };
    return (
        <div className="flex justify-center items-center gap-2 mt-2">
            <button className="py-.5 px-3 rounded-lg text-lg border border-gray-200"  onClick={decreaseQuantity}
        disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button className="py-.5 px-3 rounded-lg border border-gray-200" onClick={increaseQuantity}>+</button>
        </div>
    )
}

export default Buttons