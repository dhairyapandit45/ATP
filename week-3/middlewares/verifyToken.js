import jwt from 'jsonwebtoken'
const {verify} = jwt

export function verifyToken(req,res,next){
    //token verification logic
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({message:"please login"})
    }

    try{
    const decodedToken = verify(token,'abcdef')
    //verify gives error if tokens dont match
    console.log(decodedToken)
    next();
    }catch(err){
        res.status(401).json({message:"session expired please re-login"})
    }
}