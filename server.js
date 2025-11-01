const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

app.listen(5000, () => console.log('Server is running on port 5000'));
