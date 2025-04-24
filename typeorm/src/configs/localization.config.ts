import * as path from "path";
import i18n from "i18n";

i18n.configure({
  locales: ["en", "it"],
  directory: path.join(__dirname, "../locales"),
  defaultLocale: "en",
  objectNotation: true,
  queryParameter: "lang",
  cookie: "locale",
});

export default i18n;
