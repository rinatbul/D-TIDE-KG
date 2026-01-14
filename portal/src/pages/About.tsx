import { useTranslation } from 'react-i18next';
import { PageLayout } from '../components/layout/PageLayout';
import projectGoalsIcon from '/projectGoals.png';
import HeaderImage from '/HeaderImage.png';
import { aboutPageGoals } from '../mocks/about';

export const About = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      breadcrumbItems={[{ label: t('breadcrumb.about') }]}
      title={t('pages.about')}
    >
            <p className="text-left mb-8 font-onest font-normal text-base leading-relaxed text-black">
              Проект Erasmus+ «Цифровая трансформация для инклюзивного докторского образования в Кыргызстане» (D-TIDE-KG) направлен на решение актуальной задачи обеспечения справедливого и высококачественного докторского образования за счёт использования потенциала цифровых технологий. Проект опирается на результаты предыдущих инициатив и сосредоточен на цифровизации программ PhD, расширении инклюзивности за счёт вовлечения удалённых регионов, а также на внедрении системных изменений в управление высшим образованием в Кыргызской Республике.
              При активном участии Министерства науки, высшего образования и инновации Кыргызской Республики (МНВОиИ КР) проект нацелен на приведение докторского образования в соответствие со стандартами Европейского пространства высшего образования (EHEA) и обеспечение устойчивого долгосрочного эффекта.
            </p>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-[-7px_0px_4px_0px_#1EB53A]">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={projectGoalsIcon} alt="Ключевые цели проекта" style={{ width: '37px', height: '37px' }} />
                      <h2 className="font-onest font-bold text-xl leading-none text-black">Ключевые цели проекта</h2>
                    </div>
                    <ol className="space-y-3">
                      {aboutPageGoals.map((goal, index) => (
                        <li key={index} className="flex gap-3 items-baseline">
                          <span className="font-onest font-normal text-base leading-none text-black shrink-0">{index + 1}.</span>
                          <span className="font-onest font-normal text-base leading-none text-black">
                            <span className="font-onest font-bold">{goal.title}</span> — {goal.description}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="shrink-0">
                    <img
                      src={HeaderImage}
                      alt="Цель проекта"
                      className="w-full max-w-[500px] h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-left mt-8 font-onest font-normal text-base leading-relaxed text-black">
              Проект структурирован в виде четырёх рабочих пакетов (WP), охватывающих управление проектом, концептуализацию и разработку платформы PhD, пилотирование цифровой среды докторских программ с учебными элементами и жизненным циклом докторанта, распространение результатов и интеграцию в политику. Каждый рабочий пакет ориентирован на устойчивость, инклюзивность через межрегиональную интеграцию и экологически ответственную реализацию проекта, включая использование энергоэффективной IT-инфраструктуры и снижение углеродного следа за счёт виртуальных встреч и гибридных мероприятий.
            </p>
            <p className="text-left mt-4 font-onest font-normal text-base leading-relaxed text-black">
              Ожидаемые результаты проекта включают разработку IT-платформы на основе анализа потребностей, внедрение 10 цифровых программ PhD, обучение 100 сотрудников и зачисление 100 докторантов в пилотные докторские программы. Кроме того, проект предусматривает пересмотр трёх национальных нормативно-политических документов и разработку плана устойчивого развития для обеспечения долгосрочного эффекта.
            </p>
            <p className="text-left mt-4 font-onest font-normal text-base leading-relaxed text-black">
              Трансформация докторского образования в Кыргызстане позволит сократить региональные диспропорции, повысить уровень инклюзивности и укрепить потенциал страны по подготовке исследователей, конкурентоспособных на международном уровне. Активное участие Министерства науки, высшего образования и инновации Кыргызской Республики гарантирует интеграцию результатов проекта в систему высшего образования Кыргызской Республики в соответствии с национальными приоритетами и приоритетами программы Erasmus+.
            </p>
    </PageLayout>
  );
};

