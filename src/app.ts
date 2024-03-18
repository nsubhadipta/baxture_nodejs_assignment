import express, { Express, Router } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const router: Router = express.Router();


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', router);

//Dynamic Route Configuration
const routesPath = path.join(__dirname, '/routes');
const routeFiles = fs.readdirSync(routesPath);

routeFiles.forEach((routeFile) => {
  if (routeFile !== 'index.ts' && routeFile.endsWith('.ts')) {
    const routeModule = require(path.join(routesPath, routeFile)).default;
    routeModule(router);
  }
});

app.get("/api/health", async (req, res) => {
  try {
    res.json({ status: 1, message: "CRUD API Backend server is Running!" });
  } catch (error) {
    res.status(403).json({ 'error': 'error occured', message: error });
  }
});

// Oops! The page you are looking for does not exist.
app.get("*", function (req, res) {
  res.status(404).send("404 Not Found: The requested URL is invalid or does not exist.");
});

const PORT = process.env.PORT || 4007;

app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
