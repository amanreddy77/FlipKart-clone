import axios from 'axios';
const URL = 'https://flipkart-clone-s4zl.onrender.com';
export const authenticateSignup = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log("Error while calling Signup api",error);
    }
}
export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log("Error while calling login api",error.message);
        return error.response;
    }
}

export const payUsingPaytm = async(data) => {
    try {
        let response = await axios.post(`${URL}/payment`,data)
        return response.data
    } catch (error) {
        console.log("Error while calling paytm api",error.message);
    }
}
export const payUsingRazorpay = async(data) => {
    try {
        let response = await axios.post(`${URL}/order`,data)
        return response.data
    } catch (error) {
        console.log("Error while calling razorpay api",error.message);
    }
}
export const RazorpayResponse = async(data) => {
    try {
        let response = await axios.post(`${URL}/order/validate`,data)
        return response.data
    } catch (error) {
        console.log("Error while validating razorpay payment",error.message);
    }
}
