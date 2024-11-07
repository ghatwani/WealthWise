import Transaction from "../model/transaction.model.js";

export const getIncome = async(req, res, next) => {
    try {
        const data= await Transaction.find({$and :[{userId:req.user.toString()}, {type:'income'}]})
        let income=0
        data.map((transaction)=>{
            income+=transaction.amount
        })
    res.status(200).json(income)
    } catch (error) {
        next(error)
    }
};  

export const getExpense =async (req, res, next) => {
    try {
        const data= await Transaction.find({$and :[{userId:req.user.toString()}, {type:'expense'}]})
        let expense=0
        data.map((transaction)=>{
            expense+=transaction.amount
        })
    res.status(200).json(expense)
    } catch (error) {
        next(error)
    }
};
