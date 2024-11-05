import Product from '../Model/productsSchema.js'
export const getProducts= async(req,res)=>{
    try {
        const products = await Product.find({})
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const getProductById= async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findOne({'id':id})
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}