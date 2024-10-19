import { errorHandler } from "../utils/error.js"

export const isAuth= async(req, res, next)=>{
    try {
        const token = req.cookie['WealthWise']

        if(!token) return new errorHandler('401', "Please login to access this route")
        
        const verify= jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user= verify._id
        next()
    } catch (error) {
        next(error)
    }
}