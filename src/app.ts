import express, { Express, Router } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const router: Router = express.Router();

app.use(express.json());



const PORT = process.env.PORT || 4007;

app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
