import express from 'express';
import { userLogin, userSignup } from '../controller/usercontroller.js';
import { getProductById, getProducts } from '../controller/productController.js';
import { paymentGateway, paytmResponse } from '../controller/paymentGateway.js';
import { RazorpayInstance, RazorpayResponse } from '../controller/RazorpayGateway.js';

const router = express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/products',getProducts)
router.get('/product/:id',getProductById)
router.post('/payment',paymentGateway)
router.post('./callback',paytmResponse)
router.post('/order',RazorpayInstance)
router.post('/order/validate',RazorpayResponse)

export default router;
