# Passport Authentication for node server

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.


## Getting Started

Start by either downloading the zip file or clone with HTTPS.

### Prerequisites

* Node 
* NPM
* Command-Line
* Code editor like Atom, VS Code
* A web browser like Safari, Google Chrome

## Running

#### Disclaimer - Change the database configurations in your server file explained below according to your preferences, but if you're using MongoDB then you can skip to step 2 to change what databse your app connects to.

### 1. Install all dependencies

From your terminal, install all dependencies for the application.

```python
npm install
```
### 2. Connect your database

* Require mongoose package (elegant mongodb object modeling for node.js)

```python
const mongoose = require("mongoose")
```
* Connect to a local database

```python
mongoose.connect("mongodb://localhost/auth", {useNewUrlParser: true});
```

### 3. Passport configurations

* Require the following passport packages

```python
const passport = require("passport")
csont LocalStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")
```

* Further configurations for express-session (cookie based session middleware) and passport to serialize and deserialize user

```python
app.use(require("express-session")({
    secret: "be as silly as you can be while initializing this secret string",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```


## Built With

* [Node.js] (https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express] (https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Passport] (http://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js
* [Passport-Local] (http://www.passportjs.org/packages/passport-local/) - Passport strategy for authenticating with a username and password.
* [Passport-Local-Mongoose] (https://github.com/saintedlama/passport-local-mongoose) - Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport
* [Express-Session] (https://expressjs.com/en/resources/middleware/cookie-session.html) - Simple cookie-based session middleware.
* [Javascript] (https://www.javascript.com/) - High-level, interpreted programming language
* [HTML] (https://www.html.com/) - Standard markup language

## Authors

* **Vasu Goel** (https://github.com/VasuGoel)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/VasuGoel/passport-auth/blob/master/LICENSE) file for details

## Acknowledgments

* Adding authentication on a college project website

