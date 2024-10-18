import Transaction from "../model/transaction.model.js";

export const newTransaction= async(req, res, next)=>{
    const{ userId, type,amount,description}=req.body;
    try {
        const data = await Transaction.create({
            userId,
             type, 
             amount,
             description
        });
        const result= await data.json()
        res.send(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const getAllTransactions = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const data = await Transaction.find({ userId });
    const result = await data.json();
    res.send(200).json(result);
  } catch (error) {
    next(error)
  }
};


export const getTransaction= async( req, res , next)=>{
    const transactionId= req.params.id;
    try {
        const data = await Transaction.find({_id: transactionId})
        const result= await data.json()
        res.send(200).json(result)
    } catch (error) {
        next(error)
    }
}