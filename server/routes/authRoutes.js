const passport = require("passport")

module.exports = (app) => {
    app.get("/", (req, res) => {
        const user = req.user
        if (user) {
            res.send(`Hello ${user.displayName} Welcome to your dashboard`)
        }
        else {
            res.send(`Please Sign in to continue`)
        }
    })
    app.get("/api/current_user" , (req,res) => {
        const user = req.user
        res.send(user)
    }) 

    app.get("/api/signout", (req, res) => {
        req.logout()
        res.redirect("/")
    })

    app.get("/auth/twitch", passport.authenticate("twitch"))

    app.get("/auth/twitch/callback", passport.authenticate("twitch"),(req,res) => {
        res.redirect("/dashboard")
    })

    app.get("/auth/google", passport.authenticate("google"))

    app.get("/auth/google/callback", passport.authenticate("google"), (req,res) => {
        res.redirect("/dashboard")
    })
}
