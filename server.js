const express = require('express');
const app = express();

const PORT = porocess.env.PORT || 3006;

app.use(express.static('public'));
app.use(express.urlencoded({  extended: true  }));
app.use(express.json());

app.use('/',require("./routes/routes"));
app.use('/api',require("./routes/api"));

app.listen(PORT, function(){
    console.log("connected to PORT" + PORT)
});

