const { Category , Sequelize , Product } = require("../models/index")
const{Op} = Sequelize;

const CategoryController = {
    async create(req,res){
        try {
            const category = await Category.create(req.body)
            res.status(201).send({message:"Category created successfully",category})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async getByID(req,res){
        try {
            const category = await Category.findByPk(req.params.id);
            res.send(category)
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})

        }
        
    },
    async getAll(req,res){
        try {
            const categories = await Category.findAll({
                attributes:["name"],
                include:{
                    model:Product,
                    attributes:["name","price"]
                }
            })
            res.send({message:"Here are all the categpries",categories})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async getOneByName(req,res){
        try {
           const category = await  Category.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
            })
            res.send(category)

        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem",error})
        }
    },
    async update(req,res){
        try {  await Category.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })
         res.send({message:"Category successfully updated"})
   
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"There was a problem",error})
        }
      
     },
    async delete(req,res){
        try {
            await Category.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.send({message:`Category with id ${req.params.id} deleted`})
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"There was a problem",error})
        }
      
    }

}

module.exports = CategoryController