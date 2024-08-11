const express = require('express');
require('dotenv').config();
const dbConnection = require('./db/config');
const cors = require('cors');

const app = express();

//DB Connection
dbConnection();

//CORS
app.use(cors())

//Public Directory
app.use(express.static('public'));

//Read and parse body
app.use(express.json());

//Auth Routes
app.use('/api/auth/', require('./routes/auth'));

//Notes Routes
app.use('/api/notes/', require('./routes/notes'));


//Listen requests
// http://localhost:4001
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});