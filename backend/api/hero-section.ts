import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readJsonFile, writeJsonFile } from './utils.js';

export default (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const data = readJsonFile('heroSection.json');
      if (!data) {
        return res.status(404).json({ error: 'Hero section data not found' });
      }
      return res.json(data);
    } catch (error) {
      console.error('Error in GET /api/hero-section:', error);
      return res.status(500).json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  if (req.method === 'PUT') {
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

    return res.json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

