import {Schema , model} from 'mongoose'

const pSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"product id is required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"]
    },
    price:{
        type:Number,
        required:[true , "price is required"],
        min:[10000,"min price is 10000"],
        max:[50000,"max price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
     }
})  


export const ProductModel = model("product",pSchema)