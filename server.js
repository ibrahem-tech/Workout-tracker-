const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({  extended: true  }));
app.use(express.json());

app.use('/',require("./routes/routes"));
app.use('/api',require("./routes/api"));

const PORT = process.env.PORT || 7000;

app.listen(PORT, function(){
    console.log("Connected to PORT " + PORT);
});
