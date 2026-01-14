import contentPhoto from '/contentPhoto.png';

export interface WorkPackage {
  id: string;
  title: string;
  content: string;
  image?: string;
  link?: string;
}

export const workPackagesList: WorkPackage[] = [
  {
    id: 'wp1',
    title: 'WP1: Управление проектом',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.`,
    image: contentPhoto,
    link: '/work-packages/wp1'
  },
  {
    id: 'wp2',
    title: 'WP2: Концептуализация и разработка PhD-платформы',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus.`,
    image: contentPhoto,
    link: '/work-packages/wp2'
  },
  {
    id: 'wp3',
    title: 'WP3: Пилотирование цифровой среды PhD-программ',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam.`,
    image: contentPhoto,
    link: '/work-packages/wp3'
  },
  {
    id: 'wp4',
    title: 'WP4: Распространение результатов и интеграция в политику',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor.`,
    image: contentPhoto,
    link: '/work-packages/wp4'
  }
];

export const workPackagesMenu = workPackagesList.map(wp => ({
  id: parseInt(wp.id.replace('wp', '')),
  title: wp.title,
  link: wp.link || `/work-packages/${wp.id}`
}));

export const workPackagesDetail: Record<string, Omit<WorkPackage, 'image' | 'link'>> = {
  wp1: {
    id: 'wp1',
    title: 'WP1: Управление проектом',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.`
  },
  wp2: {
    id: 'wp2',
    title: 'WP2: Концептуализация и разработка PhD-платформы',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus.`
  },
  wp3: {
    id: 'wp3',
    title: 'WP3: Пилотирование цифровой среды PhD-программ',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam.`
  },
  wp4: {
    id: 'wp4',
    title: 'WP4: Распространение результатов и интеграция в политику',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor.`
  }
};
