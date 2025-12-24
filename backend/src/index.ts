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

const getDataPath = (filename: string) => join(DATA_DIR, filename);

const readJsonFile = (filename: string) => {
  const filePath = getDataPath(filename);
  if (!existsSync(filePath)) {
    return null;
  }
  try {
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
};

const writeJsonFile = (filename: string, data: unknown) => {
  const filePath = getDataPath(filename);
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
};

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'API is ready' });
});

app.get('/api/hero-section', (req, res) => {
  const data = readJsonFile('heroSection.json');
  if (!data) {
    return res.status(404).json({ error: 'Hero section data not found' });
  }
  res.json(data);
});

app.put('/api/hero-section', (req, res) => {
  const { title, subtitle, backgroundImage, erasmusText } = req.body;
  
  if (!title || !subtitle || !backgroundImage || !erasmusText) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const data = {
    title,
    subtitle,
    backgroundImage,
    erasmusText,
  };

  const success = writeJsonFile('heroSection.json', data);
  if (!success) {
    return res.status(500).json({ error: 'Failed to save hero section data' });
  }

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

