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
          
        'common.button.details': 'Детальніше',
        'common.button.moreProducts': 'Більше товарів',
        'common.button.view': 'Переглянути',
        'common.title.newItems': 'Новинки',
        'common.title.populars': 'Популярне',
        'common.title.perfumes': 'Парфуми',
        'common.title.recommendedCategories': 'Рекомендовані категорії',
        'common.title.reviewsOfOurCustomersAboutCosmeticsAndCare': 'Відгуки наших покупців про кометику та догляд',
        'common.title.reviews': 'Відгуки',
        'common.title.similarProducts': 'Схожі товари',
        'common.title.especiallyForYou': 'Спеціально для вас',
          
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

        'details.description': 'Опис',
        'details.characteristics': 'Характеристики',
        'details.paymentAndDelivery': 'Оплата та доставка',
        'details.paymentAndDelivery.1': 'Готівкова оплата при отриманні замовлення ',
        'details.paymentAndDelivery.2': 'Безготівкова оплата при оформленні замовлення',
        'details.paymentAndDelivery.3': 'Оплата готівкою на нункті самовивозу',
        'details.paymentAndDelivery.4': 'Оплата готівкою при отриманні на поштових відділеннях і пунктах видачі посилок',
        'details.productCode': 'код товару: ',
        'details.addToFavorites': 'Додати до улюблених',
        'details.buy': 'Купити',

        'sortBy.title': 'Впорядкувати за: ',
        'sortBy.price': 'вартістю',
        'sortBy.popularity': 'популярністю',
        'sortBy.date': 'датою',
        'sortBy.toLow': 'за спаданням',
        'sortBy.toHigh': 'за зростанням',
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

        'common.button.details': 'Details',
        'common.button.moreProducts': 'More products',
        'common.button.view': 'View',
        'common.title.newItems': 'New items',
        'common.title.populars': 'Popular',
        'common.title.perfumes': 'Perfumes',
        'common.title.recommendedCategories': 'Recommended categories',
        'common.title.reviewsOfOurCustomersAboutCosmeticsAndCare': 'Reviews of out customers about cosmeticts and care',
        'common.title.reviews': 'Reviews',
        'common.title.similarProducts': 'Similar products',
        'common.title.especiallyForYou': 'Especially for you',

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

        'details.description': 'Description',
        'details.characteristics': 'Characteristics',
        'details.paymentAndDelivery': 'Payment and delivery',
        'details.paymentAndDelivery.1': 'Cash payment upon receipt of order',
        'details.paymentAndDelivery.2': 'Cashless payment at checkout',
        'details.paymentAndDelivery.3': 'Payment in cash at the pick-up point',
        'details.paymentAndDelivery.4': 'Payment in cash upon receipt at post offices and parcel delivery points',
        'details.productCode': 'product code',
        'details.addToFavorites': 'Add to favorites',
        'details.buy': 'Buy',

        'sortBy.title': 'Sort by: ',
        'sortBy.price': 'price',
        'sortBy.popularity': 'popularity',
        'sortBy.date': 'date',
        'sortBy.toLow': 'to low',
        'sortBy.toHigh': 'to high',
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