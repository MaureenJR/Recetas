const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

app.use(
    cors({
        //URL React
        origin:"http://localhost:3000"
    })
)

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/receta.routes");
misRutas(app);

app.listen(8000, () => console.log("Server listo!"));