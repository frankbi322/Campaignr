const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); //id refers to database id, not google id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        googleId: profile.id
      });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
//to refactor
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       User.findOne({
//         //returns a promise
//         googleId: profile.id
//       }).then(existingUser => {
//         if (existingUser) {
//           done(null, existingUser); //first arg is an error.
//         } else {
//           new User({ googleId: profile.id }).save().then(user => {
//             done(null, user);
//           });
//         }
//       });
//     }
//   )
// );

//git filter-branch -f --env-filter "GIT_AUTHOR_NAME='Frank Bi'; GIT_AUTHOR_EMAIL='frankbi322@gmail.com'; GIT_COMMITTER_NAME='Frank Bi'; GIT_COMMITTER_EMAIL='frankbi322@gmail.com';" HEAD
