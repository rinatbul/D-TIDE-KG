import { type MaterialItem } from '../components/ui/MaterialCard';

const formats = ['PDF', 'DOC', 'PPT'];
const sizes = ['2MB', '1.5MB', '3MB', '2.5MB'];

export const mockMaterials: MaterialItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: 'Heading',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '10.10.2025',
  format: formats[i % formats.length],
  size: sizes[i % sizes.length],
}));
