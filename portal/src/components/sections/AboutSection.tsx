import { Settings, List } from 'lucide-react';

export const AboutSection = () => {
  const projectTasks = [
    'Цифровая трансформация PhD-образования',
    'Гармонизация программ',
    'Развитие человеческого потенциала',
    'Содействие партнёрству',
    'Укрепление управленческих механизмов',
  ];

  const projectGoals = [
    'Обеспечение справедливого и качественного докторского образования',
    'Трансформацию PhD-образования через цифровизацию',
    'Расширение возможностей регионов',
    'Гармонизацию докторских программ',
    'Развитие кадрового потенциала',
    'Укрепление партнёрства Кыргызстан-Европа',
    'Интеграцию цифровых PhD-подходов',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">О ПРОЕКТЕ</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="about-card about-card-blue p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Задачи проекта</h3>
            </div>
            <ol className="space-y-3">
              {projectTasks.map((task, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="about-card about-card-green p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-md flex items-center justify-center">
                <List className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Цель проекта</h3>
            </div>
            <ol className="space-y-3">
              {projectGoals.map((goal, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-green-600 font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

