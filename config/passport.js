const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

// Traditional way to use passport.js for session management it stores the user in the session
// // __define-ocg__: Serialize user into session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // __define-ocg__: Deserialize user from session
// passport.deserializeUser((id, done) => {
//   User.findById(id)
//     .then(user => done(null, user))
//     .catch(err => done(err, null));
// });

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const varOcg = profile.id; // varOcg used here!

  try {
    let varFiltersCg = await User.findOne({ googleId: varOcg });
    if (varFiltersCg) {
      done(null, varFiltersCg);
    } else {
      const newUser = await User.create({
        googleId: varOcg,
        username: profile.displayName
      });
      done(null, newUser);
    }
  } catch (err) {
    console.error(err);
    done(err, null);
  }
}));
