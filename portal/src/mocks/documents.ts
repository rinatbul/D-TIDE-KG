export interface Document {
  id: number;
  title: string;
  date: string;
  format: string;
  size: string;
  url?: string;
}

export const mockDocuments: Document[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: `${10 + (i % 20)}.${(i % 12) + 1}.2025`,
  format: 'PDF',
  size: '2MB',
}));
