import express from 'express';
import Connection from './Database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';
import Razorpay from 'razorpay';
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URI=process.env.MONGODB_URI || `mongodb+srv://amanreddy77:Psreddy77.@cluster0.ngex3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
Connection(URI);


app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'reddyaman77.ar@gmail.com';


{/* 
 app.post('/order', async (req, res) => {
    try {
        const razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const options= req.body;
        const order = await razorpayInstance.orders.create(options);
        if(!order) return res.status(500).send('Some error occured');
        res.json(order);
    } catch (error) {
        console.log(error);
    }
});
*/}