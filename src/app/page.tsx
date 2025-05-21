
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, ShieldCheck, Network, DatabaseZap, Award, LayoutPanelTop } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const advantages = [
  {
    icon: Award,
    title: 'В реестре Роскомнадзора',
    description: 'Наш хостинг официально зарегистрирован и соответствует законодательству РФ.',
    delay: '0s',
  },
  {
    icon: ShieldCheck,
    title: 'Защита от DDoS-атак',
    description: 'Многоуровневая система защиты от DDoS-атак для стабильной работы ваших проектов.',
    delay: '0.6s',
  },
  {
    icon: DatabaseZap,
    title: 'Российские дата-центры',
    description: 'Современное оборудование, размещенное в надежных дата-центрах на территории России.',
    delay: '0.9s',
  },
  {
    icon: LayoutPanelTop,
    title: 'ISPManager Бесплатно Навсегда',
    description: 'Управляйте своим сайтом легко с полнофункциональной панелью ISPManager, которая всегда будет бесплатной.',
    delay: '1.2s',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="text-center py-28 md:py-40 relative">
        <div className="relative z-10 bg-background/30 backdrop-blur-md p-6 md:p-10 rounded-lg shadow-xl max-w-4xl mx-auto">
          {/* Главный заголовок удален по запросу */}
          <p className="mt-8 text-lg leading-8 text-foreground mx-auto max-w-3xl">
            Запустите свой проект в Рунете уже сегодня! Мы предоставляем <strong>бесплатный хостинг с вечно бесплатной панелью ISPManager</strong>, соответствующий всем требованиям законодательства РФ, с защитой от DDoS-атак.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 hover:border-white group/button shadow-[0_0_15px_#fff,0_0_25px_#0057B7,0_0_35px_#D52B1E] hover:shadow-[0_0_20px_#fff,0_0_30px_#0057B7,0_0_45px_#D52B1E,0_0_60px_#D52B1E]"
            >
              <Link href="#get-hosting">
                <span className="text-gradient-tricolor transition-all duration-300 ease-in-out group-hover/button:text-neon-white-glow">
                  Получить хостинг бесплатно
                </span>
                <ArrowRightCircle className="text-gradient-tricolor h-5 w-5 transition-all duration-300 ease-in-out group-hover/button:text-neon-white-glow" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages">
      <h2 className="text-4xl font-bold tracking-tight mb-16 text-center text-white">
          Почему выбирают "БыстрыйСтарт"?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <Card 
              key={advantage.title} 
              className="text-center shadow-xl transition-shadow duration-300 bg-background/30 backdrop-blur-md rounded-lg border-none"
            >
              <CardHeader className="pb-4 pt-6">
                <advantage.icon 
                  className="mx-auto h-12 w-12 icon-neon-red-malfunction animate-neon-blink mb-4" 
                  style={{ animationDelay: advantage.delay }}
                />
                <CardTitle className="text-xl font-semibold text-white">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
