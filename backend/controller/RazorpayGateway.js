import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
export const RazorpayInstance = async(req,res) =>{
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const options= req.body;
        const order = await razorpay.orders.create(options);
        if(!order) return res.status(500).send('Some error occured');
        res.json(order);
    } catch (error) {
        console.log(error);
    }
}
export const RazorpayResponse = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = hmac.digest('hex');
    if (digest !== razorpay_signature) return res.status(400).send('Transaction is invalid');
    res.json({
        status: 'success',
        message: 'Transaction is valid',
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id
    });
};