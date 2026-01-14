import { type NewsItem } from '../components/ui/NewsCard';

export interface NewsItemWithCategory extends NewsItem {
  category: string;
}

export interface NewsDetailContent {
  id: number;
  title: string;
  date: string;
  type: string;
  content: string;
}

export const mockNews: NewsItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  date: `${10 + (i % 20)}.${(i % 12) + 1}.2025`,
  type: i % 2 === 0 ? 'МЕРОПРИЯТИЯ' : 'СЕМИНАР',
  title: `Заголовок новости ${i + 1}`,
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis',
}));

export const mockNewsWithCategory: NewsItemWithCategory[] = Array.from({ length: 30 }, (_, i) => {
  const categoryIndex = i % 4;
  const categories = ['Мероприятия', 'Семинар', 'Мероприятия', 'Круглый стол'];
  const types = ['МЕРОПРИЯТИЯ СЕМИНАР', 'СЕМИНАР', 'МЕРОПРИЯТИЯ', 'КРУГЛЫЙ СТОЛ'];
  
  return {
    id: i + 1,
    date: `10.10.2025`,
    type: types[categoryIndex],
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...',
    category: categories[categoryIndex],
  };
});

export const relatedNews: NewsItem[] = [
  {
    id: 1,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  },
  {
    id: 2,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  },
  {
    id: 3,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestib...'
  }
];

export const workPackageNews: NewsItem[] = [
  {
    id: 1,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  },
  {
    id: 2,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  },
  {
    id: 3,
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ • СЕМИНАР',
    title: 'Heading',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis'
  }
];

export const defaultNewsContent: NewsDetailContent = {
  id: 1,
  title: 'Название новости',
  date: '10.10.2025',
  type: 'МЕРОПРИЯТИЯ СЕМИНАР',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.`
};

export const mockNewsContent: Record<number, NewsDetailContent> = {
  1: defaultNewsContent
};

export const newsCategories = ['Все', 'Мероприятия', 'Семинар', 'Круглый стол'];
