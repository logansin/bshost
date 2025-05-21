
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShieldCheck, Network } from "lucide-react"; 

export default function LegalInfoPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <FileText className="mx-auto h-16 w-16 text-white mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Правовая информация и Условия Использования
        </h1>
        <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
          Важная информация об использовании нашего российского бесплатного хостинга "БыстрыйСтарт".
        </p>
      </div>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-white">1. Общие положения</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white">
          <p>
            Добро пожаловать на "БыстрыйСтарт Хостинг"! Используя наши услуги, вы соглашаетесь с настоящими Условиями Предоставления Услуг. Пожалуйста, внимательно ознакомьтесь с ними.
          </p>
          <p>
            Мы предоставляем услуги бесплатного хостинга, <strong>включая полнофункциональную панель управления ISPManager, которая также предоставляется бесплатно на весь срок использования</strong>, "как есть", без каких-либо гарантий, на территории Российской Федерации. Мы оставляем за собой право изменять или прекращать предоставление услуг в любое время.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-white" />
            2. Соответствие законодательству РФ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-white">
          <p>Наш хостинг "БыстрыйСтарт" официально зарегистрирован в реестре хостинг-провайдеров Роскомнадзора и осуществляет свою деятельность в полном соответствии с законодательством Российской Федерации.</p>
          <p>Мы обеспечиваем техническое взаимодействие с системой оперативно-розыскных мероприятий (СОРМ) согласно установленным требованиям.</p>
          <p>Мы предоставляем базовую и расширенную защиту от DDoS-атак для обеспечения стабильности работы ваших ресурсов.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="text-xl text-white">3. Ответственность пользователя</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-white">
          <p>Вы несете полную ответственность за контент, размещаемый на вашем аккаунте, и за соблюдение всех применимых законов Российской Федерации.</p>
          <p>Запрещено размещение материалов, нарушающих законодательство РФ, авторские права, а также вредоносного ПО, спама и другой нежелательной активности.</p>
        </CardContent>
      </Card>

       <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="text-xl text-white">4. Ограничение ответственности</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-white">
          <p>"БыстрыйСтарт Хостинг" не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования наших услуг, включая потерю данных.</p>
           <p>Мы рекомендуем регулярно создавать резервные копии ваших данных.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-card/80 backdrop-blur-sm border-none">
        <CardHeader>
          <CardTitle className="text-xl text-white">5. Прекращение обслуживания</CardTitle>
        </CardHeader>
        <CardContent className="text-white">
          <p>
            Мы оставляем за собой право приостановить или прекратить предоставление услуг любому пользователю в случае нарушения настоящих Условий или законодательства РФ без предварительного уведомления.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
