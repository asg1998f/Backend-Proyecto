const { Order } = require("../models/index")

const OrderController = {
    async create(req,res){
        try {
            const order = await Order.create(req.body)
            res.status(201).send({message:"Order created successfully",order})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
}

module.exports = OrderController