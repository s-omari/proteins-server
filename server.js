const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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
    console.log('connected to db');
    initial();
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




const Role = db.roles;
function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }