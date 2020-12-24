const passport = require("passport")
const TwitchStrategy = require("passport-twitch-new").Strategy
const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = require("../config/keys")
const mongoose = require("mongoose")

const User = mongoose.model("users")

passport.serializeUser((user,done) => {
    done(null,user.id)
})

passport.deserializeUser(async (id,done) => {
    const user = await User.findById(id)
    done(null,user)
})

passport.use(new TwitchStrategy({
    clientID: TWITCH_CLIENT_ID,
    clientSecret: TWITCH_CLIENT_SECRET,
    callbackURL: "/auth/twitch/callback",
    proxy:true,
    scope: "user_read"
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(accessToken, refreshToken)
        const existing_User = await User.findOne({ OAuthId: profile.id })

        if (existing_User) {
            done(null, existing_User)
        }
        else{const user = await new User({
            OAuthId: profile.id,
            OAuthProvider:"Twitch",
            displayName: profile.display_name,
            email: profile.email,
            profileImageURL: profile.profile_image_url
        }).save()
        done(null, user)}

    }
))

