import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000))
    return (
        <div className='px-4'>
            <h4>{product.title.longTitle}</h4>
            <p className="flex items-center gap-2 text-[#878787]">8 Ratings & 2 Reviews 
                <div>
                    <img src={fassured} alt="fa" className="w-20"/>
                </div>
            </p>
            <p className="flex items-baseline gap-2 py-2">
                <span className="text-2xl font-semibold">₹{product.price.cost}</span>
                <span className="line-through text-[#878787]">₹{product.price.mrp}</span>
                <span className="text-[#388E3c]">₹{product.price.discount} off</span>
            </p>
            <p>Available Offers</p>
            <div className='py-2 text-sm'>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c] '/> Get Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI <span>T&C</span></p>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c]'/> Flat ₹1,250 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹15,000 <span>T&C</span></p>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c] '/> Flat ₹1,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure, Min. Txn Value: ₹15,000 <span>T&C</span></p>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c] '/> Get extra 58% off (price inclusive of cashback/coupon) <span>T&C</span></p>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c] '/> 5% Cashback on Flipkart Axis Bank Card <span>T&C</span></p>
                <p className='pt-2 items-center'><LocalOfferIcon className='text-[#388E3c] '/> Buy 2 or more items save ₹80 <span>T&C</span></p>
            </div>
            <table className='my-2'>
                <tbody className='text-sm my-4'>
                    <tr>
                        <td className='text-[#878787]'>Delivery</td>
                        <td className='font-semibold pl-10 py-3'><LocalShippingOutlinedIcon/> Delivery By {date.toDateString()} | ₹40</td>
                    </tr>
                    <tr>
                        <td className='text-[#878787]'>Warranty</td>
                        <td className='font-semibold pl-10 py-3'>1 Year Limited Domestic Warranty</td>
                    </tr>
                    <tr>
                        <td className='text-[#878787]'>Seller</td>
                        <td className=' pl-10 py-3'>
                            <p className='text-[#2874f0] font-semibold'>RetailNet</p>
                            <p>&#x2022; 14 Days Return Policy</p>
                            <p>&#x2022; GST invoice available.</p>
                            <p>&#x2022; View more sellers starting from ₹{product.price.cost}</p>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={2}>
                            <img src={adURL} alt="fp" className='w-[390px]' />
                        </td>
                    </tr>
                    <tr>
                        <td className='text-[#878787]'>Description</td>
                        <td className=' pl-10 py-3'>{product.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetail