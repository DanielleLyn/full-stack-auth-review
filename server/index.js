require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch( err => console.log(err));

app.get('/api/words', c.readWords);
app.post('/api/words', c.createWord);
app.get('/api/profile', c.readUser);

const PORT = 4000;
app.listen(PORT, () => console.log('server listening on port ' + PORT));
