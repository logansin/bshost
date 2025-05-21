
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm">
          &copy; {currentYear} БыстрыйСтарт Хостинг. Все права защищены.
        </p>
        <p className="text-xs mt-2">
          Предоставляем бесплатный хостинг для ваших проектов c вечно бесплатной панелью ISPManager.
        </p>
        <p className="text-xs mt-2">
          <Link href="/legal-info" className="hover:text-primary underline">
            Условия предоставления услуг
          </Link>
        </p>
      </div>
    </footer>
  );
}
