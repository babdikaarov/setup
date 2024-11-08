// locales/server.ts
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
   ky: () => import("./ky"),
   ru: () => import("./ru"),
});
