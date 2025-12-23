import { useParams } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { NewsDetailCarousel } from '../components/sections/NewsDetailCarousel';
import { RelatedNewsSection } from '../components/sections/RelatedNewsSection';
import { ErasmusSection } from '../components/sections/ErasmusSection';
import { PageTitle } from '../components/ui/PageTitle';

const mockNewsContent = {
  1: {
    id: 1,
    title: 'Название новости',
    date: '10.10.2025',
    type: 'МЕРОПРИЯТИЯ СЕМИНАР',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.`
  }
};

export const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsId = id ? parseInt(id, 10) : null;
  const news = newsId && mockNewsContent[newsId as keyof typeof mockNewsContent] 
    ? mockNewsContent[newsId as keyof typeof mockNewsContent]
    : {
        id: newsId || 1,
        title: 'Название новости',
        date: '10.10.2025',
        type: 'МЕРОПРИЯТИЯ СЕМИНАР',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at malesuada tortor, vel condimentum ligula. Etiam dapibus eros nibh, semper tempor odio fringilla quis. Praesent pulvinar quam ut leo vulputate pulvinar vel eget neque. Sed ultrices a nisi id interdum. Maecenas pharetra ante sit amet quam varius, sit amet aliquet nisl ultricies.

Suspendisse et efficitur dui, rhoncus malesuada erat. Sed a libero sit amet felis molestie tincidunt nec ac ante. Etiam in urna enim. Suspendisse posuere nisl vel sapien convallis, et sollicitudin eros tincidunt.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.`
      };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="px-[100px]">
          <div className="max-w-screen-2xl mx-auto px-4 mb-6">
            <Breadcrumb
              items={[
                { label: 'Новости', path: '/news' },
                { label: news.title }
              ]}
            />
          </div>

          <div className="max-w-screen-2xl mx-auto h-px bg-[#D9D9D9] mb-5"></div>

          <section className="mb-21">
            <div className="max-w-screen-2xl mx-auto px-4">
              <PageTitle mb="4">{news.title}</PageTitle>
              
              <p className="font-onest font-normal text-sm leading-none text-gray-text mb-8">
                <span>{news.date}</span>
                <span className="mx-2">{news.type}</span>
              </p>

              <NewsDetailCarousel />

              <div className="font-onest font-normal text-base leading-relaxed text-black">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="px-[100px]">
          <RelatedNewsSection />
        </div>

        <ErasmusSection />
      </main>
    </div>
  );
};

