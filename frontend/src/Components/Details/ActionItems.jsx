import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import { Button,Box,Snackbar,styled } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/Actions/cartActions';
//import { DataContext } from '../../context/DataProvider';
//import { addToFavourites } from '../../Redux/Actions/favouritesActions';
import { useState } from 'react';
import { RazorpayResponse, payUsingPaytm, payUsingRazorpay } from '../../services/api';
import { post } from '../../utils/paytm';
import { addToOrder } from '../../Redux/Actions/orderActions';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '50%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;
const ActionItems = ({ product }) => {
    const [quantity,setQuantity]= useState(1)
    const [open,setOpen]= useState(false)
    //const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;
    const addItemToCart = () => {
        dispatch(addToCart(id,quantity))
        dispatch(addToOrder(id,quantity))
        setOpen(true)
        //navigate('/cart')
    }
    
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
            "key": "rzp_test_kzINWtT3ElrntA", // Enter the Key ID generated from the Dashboard
            "amount":'500', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Flipkart", //your business name
            "description": "Test Transaction",
            "image": "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
            "order_id": response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
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
        e.preventDefault();
    }
    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton onClick={addItemToCart} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><ShoppingCartOutlinedIcon />Add to Cart</StyledButton>
            {/*<StyledButton onClick={addItemToFav} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><ShoppingCartOutlinedIcon />Add to Fav</StyledButton>*/}
            <StyledButton onClick={paymentHandler} style={{background: '#fb641b'}} variant="contained"><FlashOnOutlinedIcon /> Buy Now</StyledButton>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={()=>setOpen(false)}
                message="Item Added to Cart!"
                severity="success"
            />
        </LeftContainer>
    );
};

export default ActionItems;
