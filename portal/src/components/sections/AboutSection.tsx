import projectGoalsIcon from '/projectGoals.png';
import rectangleIcon from '/Rectangle.png';
import goalIcon from '/Goal.png';

export const AboutSection = () => {
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
    <section className="mb-21 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-onest font-bold text-[36px] leading-none uppercase text-center text-blue-primary mb-12">О ПРОЕКТЕ</h2>
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          <div className="bg-white rounded-lg shadow-[-7px_0px_4px_0px_#0072C6] w-[45vw] min-w-[500px] max-w-[644px] p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative" style={{ width: '37px', height: '37px' }}>
                <img src={rectangleIcon} alt="" className="absolute inset-0 w-full h-full" />
                <img src={goalIcon} alt="Задачи" className="absolute inset-0 w-full h-full p-1" />
              </div>
              <h3 className="font-onest font-bold text-xl leading-none text-black">Задачи проекта</h3>
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

          <div className="bg-white rounded-lg shadow-[-7px_0px_4px_0px_#1EB53A] w-[45vw] min-w-[500px] max-w-[644px] p-8">
            <div className="flex items-center gap-4 mb-6">
              <img src={projectGoalsIcon} alt="Цели проекта" style={{ width: '37px', height: '37px' }} />
              <h3 className="font-onest font-bold text-xl leading-none text-black">Цель проекта</h3>
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
        </div>
      </div>
    </section>
  );
};

