let express = require('express');
let app = express();
let Port = process.env.PORT || 3000;
require('./dbConnection');
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(Port, () => {
    console.log('express server started');
});

