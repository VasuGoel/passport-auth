const express = require("express"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      bodyParser = require("body-parser"),
      User = require("./models/user"),
      LocalStrategy = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose")
    
mongoose.connect("mongodb://localhost/auth", {useNewUrlParser: true});
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Vasu is actually pretty frickin funny",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret/:username",isLoggedIn, (req, res) => {
   res.render("secret", {username: req.params.username}); 
});

// Auth Routes

//show sign up form
app.get("/signup", (req, res) => {
   res.render("signup"); 
});
//handling user sign up
app.post("/signup", (req, res) => {
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, (err, user) => {
        if(err){
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate("local")(req, res, () => {
           res.redirect("/secret/" + req.body.username);
        });
    });
});

// LOGIN ROUTES
//render login form
app.get("/login", (req, res) => {
   res.render("login"); 
});
//login logic
//middleware
app.post("/login", passport.authenticate("local", {
    // successRedirect: "/secret",
    failureRedirect: "/login"
}) , (req, res) => {
    res.redirect("/secret/" + req.body.username);
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
})