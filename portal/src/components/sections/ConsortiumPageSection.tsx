import { ContentContainer } from '../ui/ContentContainer';
import { consortiumMembers } from '../../mocks/consortium';

export const ConsortiumPageSection = () => {
  return (
    <ContentContainer variant="screen-2xl-px4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 justify-items-center">
        {consortiumMembers.map((member) => {
          const cardHeight = member.height === 'large' ? 'h-[384px]' : 'h-[334px]';
          const imageHeight = member.imageHeight === 'large' ? 'h-[180px]' : 'h-[100px]';
          
          return (
            <div
              key={member.id}
              className={`bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-4 w-full max-w-[341px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_25.1px_0px_rgba(0,0,0,0.25)] ${cardHeight}`}
            >
              <div className={`flex items-center justify-center w-full mb-2 ${imageHeight}`}>
                <img
                  src={member.src}
                  alt={member.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="font-onest font-medium text-xl leading-none text-center text-black m-0">{member.name}</p>
            </div>
          );
        })}
      </div>
    </ContentContainer>
  );
};

