import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_DIR = join(process.cwd(), 'data');

app.use(cors());
app.use(express.json());

if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'API is ready' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

