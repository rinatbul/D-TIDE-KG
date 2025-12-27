import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const getDataDir = () => {
  if (process.env.VERCEL) {
    const tmpDir = join('/tmp', 'data');
    if (!existsSync(tmpDir)) {
      try {
        mkdirSync(tmpDir, { recursive: true });
      } catch (error) {
        console.error('Failed to create /tmp/data:', error);
      }
    }
    return tmpDir;
  }
  return join(process.cwd(), 'data');
};

const DATA_DIR = getDataDir();

export const getDataPath = (filename: string) => join(DATA_DIR, filename);

export const readJsonFile = (filename: string) => {
  const filePath = getDataPath(filename);
  if (!existsSync(filePath)) {
    if (process.env.VERCEL) {
      const fallbackPath = join(process.cwd(), 'data', filename);
      if (existsSync(fallbackPath)) {
        try {
          const content = readFileSync(fallbackPath, 'utf-8');
          const data = JSON.parse(content);
          writeJsonFile(filename, data);
          return data;
        } catch (error) {
          console.error(`Error reading fallback ${filename}:`, error);
        }
      }
    } else {
      const fallbackPath = join(process.cwd(), 'data', filename);
      if (existsSync(fallbackPath)) {
        try {
          const content = readFileSync(fallbackPath, 'utf-8');
          return JSON.parse(content);
        } catch (error) {
          console.error(`Error reading fallback ${filename}:`, error);
        }
      }
    }
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

export const writeJsonFile = (filename: string, data: unknown) => {
  const filePath = getDataPath(filename);
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
};

