const keys = require("./config/keys");
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect(keys.MONGOURI);

require("./models/Users");
require("./services/twitch_passport");
require("./services/google_passport");

const app = express();

// make express able to take json requests
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cookieSession({
    maxAge: 2592000000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());


require("./routes/analyticRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/paymentRoutes")(app);
require("./routes/spotifyRoutes")(app);
require("./routes/licenseFileRoutes")(app)	

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
