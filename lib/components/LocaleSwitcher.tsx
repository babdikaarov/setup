import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LocaleSwitcherProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   locale: string;
   i18n: string;
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ locale, i18n, ...rest }) => {
   const nextLocale = locale === "ru" ? "ky" : "ru";
   return (
      <Link href={nextLocale} locale={nextLocale} {...rest}>
         Change locale to {i18n}
      </Link>
   );
};

export default LocaleSwitcher;
