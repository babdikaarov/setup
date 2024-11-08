// page.tsx
import LocaleSwitcher from '../../lib/components/LocaleSwitcher';
import { getI18n } from '../../locales/server';
import { getStaticParams } from '../../locales/server';
import { setStaticParamsLocale } from 'next-international/server';
interface HomeProps {
    params: Promise<{
        locale: string;
    }>;
}

export function generateStaticParams() {
    return getStaticParams();
}

const Home: React.FC<HomeProps> = async ({ params }) => {
    const { locale } = await params;
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return (
        <main className="min-h-dvh flex">
            <div className="m-auto space-y-10">
                <div className="bg-bg_secondary  text-center p-4 rounded-md">
                    <h1 className="underline">{t('hello')}</h1>
                    <h2 className="underline italic">this is SSG</h2>
                </div>
                <LocaleSwitcher
                    className="block bg-button_default p-4 border-2 hover:border-border_hover rounded-md"
                    locale={locale}
                    i18n={t('nextLocale')}
                />
            </div>
        </main>
    );
};

export default Home;
