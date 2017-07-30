const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoUri);

const app = express();

// app.get('/', (req, res) => {
//   res.send({ bye: 'buddy' });
// });

// authRoutes(app);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
