const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}));

const AllProductRoutes = require("./routes/products.routes");
AllProductRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));