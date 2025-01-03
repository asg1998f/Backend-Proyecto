const express = require("express")
const app = express()
const PORT = 3000
const cors = require('cors')


app.use(express.json())

app.use(cors())
app.use("/users",require("./routes/users"))
app.use("/categories",require("./routes/categories"))
app.use("/products",require("./routes/products"))
app.use("/orders",require("./routes/orders"))


app.listen(PORT,()=>console.log("Servidor levantado en el puerto "+PORT))