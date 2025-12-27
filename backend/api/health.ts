import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
};

