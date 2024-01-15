// authMiddleware.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: '988024789066-suifemt86o6cmelc68bi9hn9t7e2in9d.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000'
}, (accessToken, refreshToken, profile, done) => {
  // Save user to the database or retrieve user details
  // Example: User.findOne({ googleId: profile.id }, (err, user) => { ... });
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
