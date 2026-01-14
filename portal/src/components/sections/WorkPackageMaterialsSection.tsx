import { useState } from 'react';
import { MaterialCard } from '../ui/MaterialCard';
import { Pagination } from '../ui/Pagination';
import { SectionTitle } from '../ui/SectionTitle';
import { CardGrid } from '../ui/CardGrid';
import { ContentContainer } from '../ui/ContentContainer';
import { mockMaterials } from '../../mocks/materials';

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
      <ContentContainer variant="screen-2xl-px4">
        <SectionTitle variant="black">МАТЕРИАЛЫ:</SectionTitle>
        
        <CardGrid>
          {paginatedMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </CardGrid>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          variant="news"
        />
      </ContentContainer>
    </section>
  );
};

