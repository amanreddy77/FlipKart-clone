import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { RazorpayResponse, payUsingPaytm, payUsingRazorpay } from "../../services/api";
import { post } from "../../utils/paytm";


const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    const buyNow = () => {
        let response = payUsingPaytm({amount:500, email: 'nandu@gmail.com'})
        let information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        }
        post(information)
    }
    const paymentHandler = (e) =>{
        let response = payUsingRazorpay({
            amount: 500,
            currency: 'INR',
            
        })
        let options = {
            "key": "rzp_test_kzINWtT3ElrntA", 
            "amount":'5000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Flipkart", //your business name
            "description": "Test Transaction",
            "image": "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
            "order_id": response.id, 
            "handler": async function (response) {
                try {
                    const data = await RazorpayResponse(response); // Using RazorpayResponse function
                    console.log(data);
                } catch (error) {
                    console.log("Error while validating razorpay payment", error.message);
                }
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Nandu", //your customer's name
                "email": "nandu@gmail.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        let rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        
    }
    return (
        <div className="min-h-screen flex  justify-center lg:mx-14 md:mx-0 ">
            {cartItems.length ? (
                <div className="container mx-auto p-[2rem] ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                        <div className="md:col-span-3 border border-[#f0f0f0] pb-4 bg-white">
                            <div>
                                <h3 className="text-lg font-semibold py-4 px-6">My Cart ({cartItems.length})</h3>
                            </div>
                            {cartItems.map(item => (
                                <CartDetails item={item} />
                            ))}
                            <div className="shadow-inner pt-4 pl-5 pr-6  flex justify-end items-start lg:justify-end md: justify-center">
                                <button className="text-white bg-[#fb641b]  py-3 text-center rounded-md font-semibold md:w-full px-20 lg:w-1/4" onClick={paymentHandler}>Place Order</button>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <TotalView cartItems={cartItems} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <EmptyCart/>
                </div>
            )}
        </div>
    );
};

export default Cart;
