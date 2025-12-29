import { kv } from '@vercel/kv';

export const readJsonFromKV = async (key: string) => {
  try {
    const data = await kv.get(key);
    if (!data) {
      return null;
    }
    if (typeof data === 'string') {
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    }
    return data;
  } catch (error) {
    console.error(`Error reading ${key} from KV:`, error);
    return null;
  }
};

export const writeJsonToKV = async (key: string, data: unknown) => {
  try {
    const value = typeof data === 'string' ? data : JSON.stringify(data);
    await kv.set(key, value);
    return true;
  } catch (error) {
    console.error(`Error writing ${key} to KV:`, error);
    return false;
  }
};

