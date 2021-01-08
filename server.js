const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// creat app and use middleware
const app = express()
app.use(cors({ origin: 'http://localhost:8081' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: 'hello world' });
})

// connect to db
const db = require('./app/models');
db.mongoose.connect(
    db.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log('could not connect to db', err);
    process.exit();
});

require('./app/routes/protein.routes')(app)

//define port and listen
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})