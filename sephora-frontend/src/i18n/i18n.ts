import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    uk: {
        translation: {
        'uan': 'грн',

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
        'footer.contacts': 'Контакти',
        'footer.addition': 'Додаток',
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

        'basket': 'Кошик',
        'basket.recomProducts': 'Рекомендовані товари',
        'basket.orderAmount': 'Сума замовлення',
        'basket.discount': 'Знижка',
        'basket.total': 'Загальна сума',
        'basket.toOrder': 'Оформити замовлення',
        'order.yourOrder': 'Ваше замовлення',
        }
    },

    en: {
        translation: {
        'uan': 'UAN',

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
        'footer.addition': 'Addition',
        'footer.contacts': 'Contacts',
        'footer.partnerProgram': 'Partner program',
        'footer.articles': 'Articles',
        'footer.news': 'News',
        'footer.supportService': 'Support service',
        'footer.information': 'You can write us a letter or call us on the numbers every day from 8:00 a.m. to 6:00 p.m.',

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

        'basket': 'Basket',
        'basket.recomProducts': 'Recommended products',
        'basket.orderAmount': 'Order amount',
        'basket.discount': 'Discount',
        'basket.total': 'Total',
        'basket.toOrder': 'To order',
        'order.yourOrder': 'Your order',
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