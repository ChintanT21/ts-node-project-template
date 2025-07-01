import i18n from '../configs/localization.config';

export const getResponseMessage = (action: string, entityName: string) => {
  return i18n.__(action, { entity: translateMessage(`ENTITY_NAMES.${entityName}`) });
};

export const translateMessage = (message: string): string => {
  return i18n.__(message);
};
