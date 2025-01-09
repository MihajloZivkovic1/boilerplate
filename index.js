// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');


//routes
const userRoutes = require('./components/user/userRoutes')


//express
const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:3001'];


app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/', async (req, res) => {
  res.send("Radi server");
})

app.use('/users', userRoutes);