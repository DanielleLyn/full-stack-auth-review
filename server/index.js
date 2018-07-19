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
app.get('/auth/callback', (req,res) =>{
    const payload ={
        client_id:process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.header.host}/callback`
    }
    return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/`)
})

const PORT = 4000;
app.listen(PORT, () => console.log('server listening on port ' + PORT));
