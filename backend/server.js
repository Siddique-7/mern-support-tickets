import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js';
import userRouter from './routes/userRoute.js';
import ticketRouter from './routes/ticketRoute.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("API is running...");
});

// Mount routers
app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);

// Global error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
