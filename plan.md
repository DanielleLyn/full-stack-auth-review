#full stack review plan 0 word bank

##front-end

* Pages 
    * Profile 
        * name
        * picture
        * email address
    * landing/home page
    * list words 
    

* Components 
    * Header 
    * Button
    * Navigation 
    * Input
    * Footer 
        * copyright
        * careers 

* Redux
    * store
    * reducer 
        * initial state (what kind of state do we want? we are going to keep user state global for this app)
            * user
        * reducer function
        * action creators 
            * login
            * logout
        * action type names 
            * USER_LOGIN
            * USER_LOGOUT

* Routes 
    * BrowserRouter
    * / 
    * /login
    * /profile 
    * /words
    * 


## back-end (Server)

* Middleware 
    * ensureLoggedIn
* Routes
    * /api/words
        *GET
        *POST
        (can't patch something that isn't there)
    * /api/profile
        *GET
* Auth
    * Auth0
* files
    * /server
    * index.js
    * controller

## Database

* tables
    * users
        * id 
        * auth0_id (this is how we link to auth0)
        * name
        * picture_url
        * email
   * words
        * id
        * text
* files
    * /db
     * init.sql
     * read_words.sql
     * create_word.sql
     * create_profile.sql
     * read_profile.sql


## NPM Packages 

* axios
* express
* massive
* body-parser
* dotenv
* express-session
* redux
* react-redux
* react-router-dom

## Third Party

* Auth0
    * application
    * social connections
* GitHub
* Heroku 
* redux devTools
* postman
* sql tabs
* Chrome
    * DevTools
     * network tabs