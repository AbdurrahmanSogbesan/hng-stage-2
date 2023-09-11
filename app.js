require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const personRoutes = require('./routes/person');

const app = express();

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.4uhxiz2.mongodb.net/${process.env.MONGO_DEFAULT_DB}?retryWrites=true&w=majority`;

app.use(bodyParser.json());

app.use('/api', personRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.statusCode || 500;
    const { message, data } = err;
    res.status(status).json({ message, data });
});

const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(result => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => console.log(err))


