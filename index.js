const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoUri);

const app = express();

//NOTE: run "npm run dev"

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy' });
// });

// authRoutes(app);

require('./routes/authRoutes')(app);

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
