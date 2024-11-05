import Product from "./Model/productsSchema.js";
import { products } from "./constants/data.js";

const DefaultData = async() =>{
    try {
        await Product.insertMany(products)
        console.log('Default data inserted successfully');
    } catch (error) {
        console.log('Error while inserting data:',error.message);
    }
}
export default DefaultData;