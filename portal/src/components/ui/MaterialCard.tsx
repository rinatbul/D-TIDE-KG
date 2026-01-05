import pdfIcon from '/PDF.png';
import docIcon from '/DOC.png';
import pptIcon from '/PPT.png';
import contentPhoto from '/contentPhoto.png';
import openIcon from '/Group 24.png';
import downloadIcon from '/Download.png';

export interface MaterialItem {
  id: number;
  title: string;
  description: string;
  date: string;
  format: string;
  size: string;
  imageUrl?: string;
  openUrl?: string;
  downloadUrl?: string;
}

interface MaterialCardProps {
  material: MaterialItem;
}

const getFormatIcon = (format: string) => {
  const formatUpper = format.toUpperCase();
  if (formatUpper === 'DOC' || formatUpper === 'DOCX') {
    return docIcon;
  }
  if (formatUpper === 'PPT' || formatUpper === 'PPTX') {
    return pptIcon;
  }
  return pdfIcon;
};

export const MaterialCard = ({ material }: MaterialCardProps) => {
  const handleOpen = () => {
    if (material.openUrl) {
      window.open(material.openUrl, '_blank');
    }
  };

  const handleDownload = () => {
    if (material.downloadUrl) {
      window.open(material.downloadUrl, '_blank');
    }
  };

  const formatIcon = getFormatIcon(material.format);

  return (
    <div className="bg-white rounded-[10px] border border-gray-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]">
      <img
        src={material.imageUrl || contentPhoto}
        alt={material.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img src={formatIcon} alt={material.format} className="w-[28px] h-[27px] object-contain shrink-0" />
          <h3 className="font-onest font-semibold text-xl leading-none text-black">{material.title}</h3>
        </div>
        <p className="font-onest font-normal text-sm leading-none text-black mb-4 line-clamp-1">
          {material.description}
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-onest font-normal text-[10px] leading-none text-[#D80027]">{material.date}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-[#919EAB] opacity-100"></span>
            <span className="font-onest font-medium text-[10px] leading-none uppercase text-black">{material.format}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-[#919EAB] opacity-100"></span>
            <span className="font-onest font-medium text-[10px] leading-none uppercase text-black">{material.size}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleOpen}
              className="flex items-center gap-1.5 bg-none border-none cursor-pointer transition-opacity duration-300 hover:opacity-70 p-0"
            >
              <span className="font-onest font-medium text-[10px] leading-none text-[#0052B4]">Открыть</span>
              <img src={openIcon} alt="Открыть" className="w-[13px] h-[13px] object-contain" />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 bg-none border-none cursor-pointer transition-opacity duration-300 hover:opacity-70 p-0"
            >
              <span className="font-onest font-medium text-[10px] leading-none text-[#0052B4]">Скачать</span>
              <img src={downloadIcon} alt="Скачать" className="w-[13px] h-[13px] object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

