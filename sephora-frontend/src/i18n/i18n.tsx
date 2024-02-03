import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    uk: {
        translation: {
        'header.fullSizePerfumes': 'Повнорозмірні парфуми',
        'header.perfumesOnTap': 'Розпив парфумерії',
        'header.care': 'Догляд',
        'header.new': 'NEW',
        'header.catalog': 'Каталог',
        'header.aboutUs': 'Про нас',
        'header.paymentAndDelivery': 'Оплата та доставка',
        'header.contact': 'Контакти',

        'common.button.detail': 'Детальніше',
        'common.button.moreProducts': 'Більше товарів',
        'common.button.view': 'Переглянути',
        'common.title.newItems': 'Новинки',
        'common.title.populars': 'Популярне',
        'common.title.perfumes': 'Парфуми',
        'common.title.recommendedCategories': 'Рекомендовані категорії',
        'common.title.reviewsOfOurCustomersAboutCosmeticsAndCare': 'Відгуки наших покупців про кометику та догляд',

        'recCategories.showerAndBath': 'Душ та ванна',
        'recCategories.accessories': 'Аксесуари',
        'recCategories.vitamins': 'Вітамини',
        'recCategories.face': 'Обличчя',

        'footer.aboutDelivery': 'Про доставку',
        'footer.paymentMethods': 'Способи оплати',
        'footer.aboutProducts': 'Про продукцію',
        'footer.beautyClub': 'Beauty Club',
        'footer.termsOfUse': 'Умови використання',
        'footer.returnsAndExchanges': 'Повернення та обмін',
        'footer.aboutUs': 'Про нас',
        'footer.contact': 'Контакти',
        'footer.partnerProgram': 'Партнерська програма',
        'footer.articles': 'Статті',
        'footer.news': 'Новини',
        'footer.supportService': 'Служба підтримки',
        'footer.information': 'Ви можете написати нам лист або зателефонувати за номерами щоденно з 8:00 до 18:00',
        }
    },

    en: {
        translation: {
        'header.fullSizePerfumes': 'Full size perfumes',
        'header.perfumesOnTap': 'Perfumes on tap',
        'header.care': 'Care',
        'header.new': 'NEW',
        'header.catalog': 'Catalog',
        'header.aboutUs': 'About us',
        'header.paymentAndDelivery': 'Payment and delivery',
        'header.contact': 'Contact',

        'common.button.detail': 'Detail',
        'common.button.moreProducts': 'More products',
        'common.button.view': 'View',
        'common.title.newItems': 'New items',
        'common.title.populars': 'Popular',
        'common.title.perfumes': 'Perfumes',
        'common.title.recommendedCategories': 'Recommended categories',
        'common.title.reviewsOfOurCustomersAboutCosmeticsAndCare': 'Reviews of out customers about cosmeticts and care',

        'recCategories.showerAndBath': 'Shower & bath',
        'recCategories.accessories': 'Accessories',
        'recCategories.vitamins': 'Vitamins',
        'recCategories.face': 'Face',

        
        'footer.aboutDelivery': 'About delivery',
        'footer.paymentMethods': 'Payment methods',
        'footer.aboutProducts': 'About products',
        'footer.beautyClub': 'Beauty Club',
        'footer.termsOfUse': 'Terms of use',
        'footer.returnsAndExchanges': 'Returns and exchanges',
        'footer.aboutUs': 'About us',
        'footer.contact': 'Contact',
        'footer.partnerProgram': 'Partner program',
        'footer.articles': 'Articles',
        'footer.news': 'News',
        'footer.supportService': 'Sipport service',
        'footer.information': 'You can write us a letter or call the numbers from 8:00 a.m. to 6:00 p.m. daily',
        }
    }
},
    lng: 'uk', // мова за замовчуванням
    fallbackLng: 'uk', // мова, яка буде використовуватися, якщо вказана не існує
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;