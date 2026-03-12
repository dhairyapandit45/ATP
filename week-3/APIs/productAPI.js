import exp from 'express'
export const productApp=exp.Router()
import { ProductModel } from '../models/productModel.js';
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js';



productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body;  
    const newProductDocument = new ProductModel(newProduct)
    //save
    const result =await newProductDocument.save()
    console.log("result ",result)
    //send res
    res.status(201).json(result)
})

//read all  products
productApp.get("/products",verifyToken,async(req,res)=>{
    //read all products from db
    let productsList = await ProductModel.find()
    if(!productsList){
        return res.status(404).json({message:"not found"})
    }
    res.status(200).json(productsList)
})

//read a product by productId
productApp.get("/products/:id",verifyToken,async(req,res)=>{
    const pid=req.params.id
    //find product by id
    const productObj= await ProductModel.findOne({productId:pid})
    if(!productObj){
        return res.status(404).json({message:"not found"})
    }
    res.status(200).json(productObj)
})

//update a product by product id
productApp.put("/products/:id",verifyToken,async(req,res)=>{
    const modifiedProduct=req.body
    const pid=req.params.id
    //find product by id and update
    const productObj= await ProductModel.findOneAndUpdate({productId:pid},modifiedProduct,{new:true})
    if(!productObj){
        return res.status(404).json({message:"not found"})
    }
    res.status(200).json(productObj)
})

//delete a product by id
productApp.delete("/products/:id",verifyToken,async(req,res)=>{
    const pid=req.params.id
    //find product by id and delete
    const productObj= await ProductModel.findOneAndDelete({productId:pid})
    if(!productObj){
        return res.status(404).json({message:"not found"})
    }
    res.status(200).json({message:"product deleted"})
})