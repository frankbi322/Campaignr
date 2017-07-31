const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoUri);

const app = express();

// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy' });
// });

// authRoutes(app);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
