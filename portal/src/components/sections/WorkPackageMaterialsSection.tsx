import { useState } from 'react';
import { MaterialCard, type MaterialItem } from '../ui/MaterialCard';
import { Pagination } from '../ui/Pagination';

const formats = ['PDF', 'DOC', 'PPT'];
const sizes = ['2MB', '1.5MB', '3MB', '2.5MB'];

const mockMaterials: MaterialItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: 'Heading',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta dictum magna quis lobortis. Nunc elementum metus quis leo vestibulum porttitor. Cras vel hendrerit diam. Sed et lorem lacinia, aliquam lacus vitae, porta risus. Vestibulum ut velit sed nulla interdum placerat. Etiam turpis turpis, mollis vitae tortor sed, gravida faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '10.10.2025',
  format: formats[i % formats.length],
  size: sizes[i % sizes.length],
}));

export const WorkPackageMaterialsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockMaterials.length / itemsPerPage);
  
  const paginatedMaterials = mockMaterials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="mb-21 bg-[#F0F0F0]">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-[#0052B4] mb-12">МАТЕРИАЛЫ:</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          variant="news"
        />
      </div>
    </section>
  );
};

