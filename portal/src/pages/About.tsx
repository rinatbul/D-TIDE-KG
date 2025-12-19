import { Header } from '../components/layout/Header';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ErasmusSection } from '../components/sections/ErasmusSection';
import projectGoalsIcon from '/projectGoals.png';
import rectangleIcon from '/Rectangle.png';
import goalIcon from '/Goal.png';
import HeaderImage from '/HeaderImage.png';

export const About = () => {
  const projectTasks = [
    {
      title: 'Цифровая трансформация PhD-образования:',
      description: 'Разработка ИТ-платформы и цифровых PhD-куррикулумов.'
    },
    {
      title: 'Гармонизация программ:',
      description: 'Адаптация к стандартам EHEA и Болонского процесса, повышение международной сопоставимости.'
    },
    {
      title: 'Развитие человеческого потенциала:',
      description: 'Обучение 100 сотрудников — академического и административного состава.'
    },
    {
      title: 'Содействие партнёрству:',
      description: 'Укрепление международного сотрудничества между европейскими и кыргызскими университетами.'
    },
    {
      title: 'Укрепление управленческих механизмов:',
      description: 'Интеграция цифровых PhD-подходов в национальные документы, улучшение нормативной базы.'
    },
  ];

  const projectGoals = [
    'Обеспечение справедливого и качественного докторского образования с применением цифровых технологий по всей территории Кыргызской Республики.',
    'Трансформацию PhD-образования через цифровизацию программ, повышение доступности и снижение региональных дисбалансов.',
    'Расширение возможностей регионов, включая малообслуживаемые территории.',
    'Гармонизацию докторских программ со стандартами Европейского пространства высшего образования (EHEA) и Болонского процесса.',
    'Развитие кадрового потенциала вузов и научных организаций.',
    'Укрепление партнёрства Кыргызстан–Европа, продвижение совместных инициатив и обмена знаниями.',
    'Интеграцию цифровых PhD-подходов в государственную политику.',
  ];

  return (
    <div className="min-h-screen flex flex-col about-page-bg">
      <Header />
      <main className="flex-1 pt-[calc(5vh+109px+24px)]">
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb items={[{ label: 'О проекте' }]} />
        </div>

        <div className="breadcrumb-divider"></div>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="about-page-title mb-16">О проекте</h1>

            <div className="space-y-8">
              <div className="about-page-card about-page-card-green">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={projectGoalsIcon} alt="Цели проекта" style={{ width: '37px', height: '37px' }} />
                      <h2 className="about-card-title">Цель проекта</h2>
                    </div>
                    <ol className="space-y-3">
                      {projectGoals.map((goal, index) => (
                        <li key={index} className="flex gap-3 items-baseline">
                          <span className="about-list-description shrink-0">{index + 1}.</span>
                          <span className="about-list-description">{goal}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="shrink-0">
                    <img
                      src={HeaderImage}
                      alt="Цель проекта"
                      className="about-page-image"
                    />
                  </div>
                </div>
              </div>

              <div className="about-page-card about-page-card-blue">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <img
                      src={HeaderImage}
                      alt="Задачи проекта"
                      className="about-page-image"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative" style={{ width: '37px', height: '37px' }}>
                        <img src={rectangleIcon} alt="" className="absolute inset-0 w-full h-full" />
                        <img src={goalIcon} alt="Задачи" className="absolute inset-0 w-full h-full p-1" />
                      </div>
                      <h2 className="about-card-title">Задачи проекта</h2>
                    </div>
                    <ol className="space-y-4">
                      {projectTasks.map((task, index) => (
                        <li key={index} className="flex gap-3 items-baseline">
                          <span className="about-list-item text-blue-600 shrink-0">{index + 1}.</span>
                          <div>
                            <span className="about-list-item block">{task.title}</span>
                            <p className="about-list-description mt-1">{task.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ErasmusSection />
      </main>
    </div>
  );
};

