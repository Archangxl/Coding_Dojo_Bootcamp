const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));4

const PetRoutes = require('./routes/playerRoutes');
PetRoutes(app);

app.listen(8000, () => console.log('The server is all fired up on port 8000!'));