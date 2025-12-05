import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerUsers from './routes/ProductRoute.js';
import routerProducts from './routes/ProductRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// register routes
app.use('/api/sehub/products', routerUsers);
app.use('/api/sehub/users', routerProducts);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server berjalan di port", process.env.PORT || 5000);
});
