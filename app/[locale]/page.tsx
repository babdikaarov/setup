// page.tsx
import LocaleSwitcher from "../../lib/components/LocaleSwitcher";
import { getI18n } from "../../locales/server";

interface PageProps {
   params: Promise<{ locale: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
   const { locale } = await params;
   const t = await getI18n();

   return (
      <main className="min-h-dvh flex">
         <div className="m-auto space-y-10">
            <div className="bg-white text-black p-4 rounded-md">
               <h1 className="underline">{t("hello")}</h1>
               <h2 className="underline italic">{t("nested.hello")}</h2>
            </div>
            <LocaleSwitcher
               className="block shadow-sm shadow-white rounded-md"
               locale={locale}
               i18n={t("nextLocale")}
            />
         </div>
      </main>
   );
};

export default Page;
