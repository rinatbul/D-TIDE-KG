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
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      <main className="flex-1 pt-50">
        <div className="px-[100px]">
          <div className="max-w-screen-2xl mx-auto px-4 mb-6">
            <Breadcrumb items={[{ label: 'О проекте' }]} />
          </div>

          <div className="max-w-screen-2xl mx-auto h-px bg-[#D9D9D9] mb-5"></div>

          <section className="mb-21">
            <div className="max-w-screen-2xl mx-auto px-4">
            <h1 className="font-onest font-bold text-[40px] leading-none text-left text-black mb-10">О проекте</h1>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-[-7px_0px_4px_0px_#1EB53A]">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={projectGoalsIcon} alt="Цели проекта" style={{ width: '37px', height: '37px' }} />
                      <h2 className="font-onest font-bold text-xl leading-none text-black">Цель проекта</h2>
                    </div>
                    <ol className="space-y-3">
                      {projectGoals.map((goal, index) => (
                        <li key={index} className="flex gap-3 items-baseline">
                          <span className="font-onest font-normal text-base leading-none text-black shrink-0">{index + 1}.</span>
                          <span className="font-onest font-normal text-base leading-none text-black">{goal}</span>
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

              <div className="bg-white rounded-lg p-8 shadow-[-7px_0px_4px_0px_#0072C6]">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <img
                      src={HeaderImage}
                      alt="Задачи проекта"
                      className="w-full max-w-[500px] h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative" style={{ width: '37px', height: '37px' }}>
                        <img src={rectangleIcon} alt="" className="absolute inset-0 w-full h-full" />
                        <img src={goalIcon} alt="Задачи" className="absolute inset-0 w-full h-full p-1" />
                      </div>
                      <h2 className="font-onest font-bold text-xl leading-none text-black">Задачи проекта</h2>
                    </div>
                    <ol className="space-y-4">
                      {projectTasks.map((task, index) => (
                        <li key={index} className="flex gap-3 items-baseline">
                          <span className="font-nunito font-bold text-base leading-none text-blue-600 shrink-0">{index + 1}.</span>
                          <div>
                            <span className="font-nunito font-bold text-base leading-none text-black block">{task.title}</span>
                            <p className="font-onest font-normal text-base leading-none text-black mt-1">{task.description}</p>
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
        </div>

        <ErasmusSection />
      </main>
    </div>
  );
};

