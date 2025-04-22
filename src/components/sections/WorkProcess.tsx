import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  bgColor: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, bgColor }) => {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mx-auto mb-4`}>
        <span className="text-primary font-bold text-xl">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Анализ требований",
      description: "Изучаем ваш бизнес, цели и потребности",
      bgColor: "bg-brand-100"
    },
    {
      number: 2,
      title: "Разработка стратегии",
      description: "Создаем план реализации проекта",
      bgColor: "bg-violet-light"
    },
    {
      number: 3,
      title: "Реализация",
      description: "Воплощаем проект в жизнь согласно плану",
      bgColor: "bg-accent"
    },
    {
      number: 4,
      title: "Анализ и улучшение",
      description: "Постоянно оптимизируем показатели",
      bgColor: "bg-brand-100"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачный и эффективный процесс сотрудничества для достижения максимальных результатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
