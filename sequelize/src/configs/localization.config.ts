import i18n from 'i18n';
import * as path from 'path';

i18n.configure({
  locales: ['en', 'it'],
  directory: path.join(__dirname, '../locales'),
  defaultLocale: 'it',
  objectNotation: true,
  queryParameter: 'lang',
  cookie: 'locale',
});

export default i18n;
