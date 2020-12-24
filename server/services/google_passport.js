const passport = require("passport")
const googleStrategy = require("passport-google-oauth2").Strategy
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../config/keys")
const mongoose = require("mongoose")

const User = mongoose.model("users")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
})


passport.use(new googleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true,
    scope:
        ['email', 'profile']

}, async (accessToken, refreshToken, profile, done) => {
    const existing_User = await User.findOne({ OAuthId: profile.id })

    if (existing_User) {
        done(null, existing_User)
    }
    else {
        const user = await new User({
            OAuthId: profile.id,
            OAuthProvider: "Google",
            displayName: profile.displayName,
            email: profile.email,
            profileImageURL: profile.picture
        }).save()
        done(null, user)
    }
}
))