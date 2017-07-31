const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        //function that tries to find a record with this username
        //returns a promise
        googleId: profile.id
      }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser); //first arg is an error.
        } else {
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
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
