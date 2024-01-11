import mongoose from "mongoose";

const  productModel = new mongoose.Schema({
    name:String,
    age:String,
    gender:String,
    faculty:String
});

export const Products = mongoose.models.products || mongoose.model('products', productModel);