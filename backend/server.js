const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const { notFound , errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB();

app.get('/',(req,res ) => {
    res.send('API is running..');
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


app.use(express.json())

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)