import paytmchecksum from '../paytm/PaytmChecksum.js'
import { paytmMerchantKey, paytmParams } from '../server.js'
import formidable from 'formidable';
import https from 'https';
import { response } from 'express';
export const paymentGateway = async(req,res) => {
    try {
        let response = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
        let params= {
            ...paytmParams,
            "CHECKSUMHASH": response
        }
        res.status(200).json(params)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const paytmResponse = (req,res) =>{
    const form = new formidable.IncomingForm();
    let paytmCheckSum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;
    let isVerifySignature = paytmchecksum.verifySignature(req.body, paytmMerchantKey, paytmCheckSum);
    if(isVerifySignature){
        let paytmParams = {
            MID: req.body.MID,
            ORDERID: req.body.ORDERID
        }
        paytmchecksum.generateSignature(paytmParams, paytmMerchantKey).then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum;
            let post_data = JSON.stringify(paytmParams);
            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            }
            let res = '';
            let post_Req=https.request(options,function(post_res){
                post_res.on('data', function (chunk) {
                    res += chunk;
                });
                post_res.on('end', function(){
                    let result = JSON.parse(res);
                    response.redirect('http://localhost:5173/');
                });
            });
        })
    } else{
        console.log('checksum mismatched');
    }
}