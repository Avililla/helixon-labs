import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './config';

function matchAcceptLanguage(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;

  const languages = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase());

  for (const lang of languages) {
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
  }

  return null;
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  const cookieLocale = cookieStore.get('helixon-locale')?.value as Locale | undefined;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return {
      locale: cookieLocale,
      messages: (await import(`../locales/${cookieLocale}.json`)).default,
    };
  }

  const acceptLanguage = headersList.get('accept-language');
  const detectedLocale = matchAcceptLanguage(acceptLanguage) || defaultLocale;

  return {
    locale: detectedLocale,
    messages: (await import(`../locales/${detectedLocale}.json`)).default,
  };
});
