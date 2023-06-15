const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const data_route = require('./routes/data-route')
const app = express();

app.use(express.json());
app.use(cors());

// app.use('/api', data_route)




module.exports = {
    server: app,
    start: () => {
        mongoose
            .connect(process.env.DBURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                app.listen(process.env.PORT, () => {
                    console.log(`app listining on port${process.env.PORT}`);
                });
            }).catch((err) => {
                console.log(err);
            })
    },
};