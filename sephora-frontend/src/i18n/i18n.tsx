import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    uk: {
        translation: {
        'header.fullSizePerfume': 'Повнорозмірні парфуми',
        'header.bottlingPerfumes': 'Розпив парфумерії',
        'header.care': 'Догляд',
        'header.new': 'NEW',
        'header.catalogue': 'Каталог',
        'header.aboutUs': 'Про нас',
        'header.paymentAndDelivery': 'Оплата та доставка',

        'common.button.moreDetails': 'Детальніше',
        'common.button.moreProducts': 'Більше товарів',
        'common.button.review': 'Переглянути',
        'common.title.novelty': 'Новинки',
        'common.title.popular': 'Популярне',
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
        'footer.contacts': 'Контакти',
        'footer.addition': 'Додаток',
        'footer.partnerProgram': 'Партнерська програма',
        'footer.articles': 'Статті',
        'footer.news': 'Новини',
        'footer.supportService': 'Служба підтримки',
        'footer.information': 'Ви можете написати нам лист або зателефонувати за номерами щоденно з 8:00 до 18:00',
        }
    },

    en: {
        translation: {
        'header.fullSizePerfume': 'Full size perfume',
        'header.bottlingPerfumes': 'Bottling perfumes',
        'header.care': 'Care',
        'header.new': 'NEW',
        'header.catalogue': 'Catalogue',
        'header.aboutUs': 'About us',
        'header.paymentAndDelivery': 'Payment and delivery',

        'common.button.moreDetails': 'More details',
        'common.button.moreProducts': 'More products',
        'common.button.review': 'Review',
        'common.title.novelty': 'Novelty',
        'common.title.popular': 'Popular',
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
        'footer.addition': 'Addition',
        'footer.contacts': 'Contacts',
        'footer.partnerProgram': 'Partner program',
        'footer.articles': 'Articles',
        'footer.news': 'News',
        'footer.supportService': 'Support service',
        'footer.information': 'You can write us a letter or call us on the numbers every day from 8:00 a.m. to 6:00 p.m.',
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