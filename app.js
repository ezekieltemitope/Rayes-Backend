const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/api/v1',adminRouter);


app.get('/', (req, res) => {
    res.status(200).send('Rayez Online Grocery Shop');
});

module.exports = app;