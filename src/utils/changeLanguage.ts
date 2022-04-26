import i18n from '../core/i18n';

const changeLanguage = (lanaguage: 'es' | 'en' | 'pt') => {
  i18n.changeLanguage(lanaguage);
};

export default changeLanguage;
