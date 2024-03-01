import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    uk: {
        translation: {
        'uan': 'грн',
        'pc': 'шт',

        'singIn': 'Увійти',
        'forgotPassword': 'Забули пароль?',
        'email': 'E-mail',
        'email/login': 'E-mail/Login',
        'password': 'Пароль',
        'name': 'Ім\'я',
        'surname': 'Прізвище',
        'phone': 'Номер телефона',
        'date': 'Дата народження',
          
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
        'recCategories.vitamins': 'Вітаміни',
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
        'details.addedToFavorites': 'Додано до улюблених',
        'details.buy': 'Купити',

        'sortBy.title': 'Впорядкувати за: ',
        'sortBy.price': 'вартістю',
        'sortBy.popularity': 'популярністю',
        'sortBy.date': 'датою',
        'sortBy.toLow': 'за спаданням',
        'sortBy.toHigh': 'за зростанням',

        'basket': 'Кошик',
        'basket.recomProducts': 'Рекомендовані товари',
        'basket/order.toOrder': 'Оформити замовлення',
        'basket/order.orderAmount': 'Сума замовлення',
        'basket/order.discount': 'Знижка',
        'basket/order.total': 'Загальна сума',

        'order.yourOrder': 'Ваше замовлення',
        'order.newBuyer': 'Новий клієнт',
        'order.regularCustomer': 'Постійний покупець',
        'order.continueShopping': 'Продовжити покупки',
        'order.further': 'Далі',
        'order.thank': 'Дякуємо за замовлення :)',
        'order.thank.view': 'Переглянути деталі замовлення',
        'order.delivery.city': 'Місто',
        'order.delivery.street': 'Вулиця',
        'order.delivery.house': 'Будинок',
        'order.delivery.sq': 'Кв',
        'order.delivery.options': 'Варіанти доставки',
        'order.delivery.thisFieldIsRequired': 'Це поле обов\'язкове',
        'order.delivery.paymentMethods': 'Варіанти оплати',
        'order.delivery.addComment': 'Додати коментар до замовлення',
        'order.delivery.promoCode': 'Я маю промокод чи сертифікат',
        'order.delivery.callMe': 'Мені можна не телефонувати для підтвердження замовлення',
        'order.delivery.cashOnDelivery': 'Накладений платіж',
        'order.delivery.online': 'Онлайн',
        'order.delivery.pickup': 'Самовивіз',
        'order.delivery.novaPost': 'Нова пошта',
        'order.delivery.novaPost.postMachine': 'Нова пошта (Поштомат)',
        'order.delivery.ukrpost': 'Укрпошта',
        'order.status': 'Статус:',
        'order.status.issued': 'оформлено',
        'order.paymentByCard': 'Оплата картою',
        'order.paymentByCard.cardNumber': 'Номер карти',
        'order.paymentByCard.saveTheCard': 'Зберегти карту',
        'order.paymentByCard.pay': 'Оплатити',
        
        'profile.contactInformation': 'Контактна інформація',
        'profile.addressBook': 'Адресна книга',
        'profile.wishlist': 'Список бажань',
        'profile.orderHistory': 'Історія замовлень',
        'profile.contactInformation.oldPassword': 'Старий пароль',
        'profile.contactInformation.newPassword': 'Новий пароль',
        'profile.contactInformation.passwordVerification': 'Підтвердження пароля',
        'profile.save': 'Зберегти',
        'profile.addressBook.edit': 'Редагувати',
        'profile.wishlist.listIsEmpty': 'Список пустий',
        'profile.orderHistory.order': 'Замовлення №.',
        'profile.orderHistory.delivered': 'Доставлено',
        'profile.orderHistory.inProcess': 'В процесі',
        'profile.orderHistory.cancelled': 'Скасовано',
        }
    },

    en: {
        translation: {
        'uan': 'UAN',
        'pc': 'pc',

        'singIn': 'Sing in',
        'forgotPassword': 'Forgot your password?',
        'password': 'Password',
        'name': 'Name',
        'surname': 'Surname',
        'phone': 'Phone number',
        'date': 'Date of birth',
          
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
        'details.productCode': 'product code: ',
        'details.addToFavorites': 'Add to favorites',
        'details.addedToFavorites': 'Added to favorites',
        'details.buy': 'Buy',

        'sortBy.title': 'Sort by: ',
        'sortBy.price': 'price',
        'sortBy.popularity': 'popularity',
        'sortBy.date': 'date',
        'sortBy.toLow': 'to low',
        'sortBy.toHigh': 'to high',

        'basket': 'Basket',
        'basket.recomProducts': 'Recommended products',
        'basket/order.toOrder': 'To order',
        'basket/order.orderAmount': 'Order amount',
        'basket/order.discount': 'Discount',
        'basket/order.total': 'Total',

        'order.yourOrder': 'Your order',
        'order.newBuyer': 'New buyer',
        'order.regularCustomer': 'Regular customer',
        'order.continueShopping': 'Continue shopping',
        'order.further': 'Further',
        'order.thank': 'Thank you fot your order :)',
        'order.thank.view': 'View order details',
        'order.delivery.city': 'City',
        'order.delivery.street': 'Street',
        'order.delivery.house': 'House',
        'order.delivery.sq': 'Sq',
        'order.delivery.options': 'Delivery options',
        'order.delivery.thisFieldIsRequired': 'This field is required',
        'order.delivery.paymentMethods': 'Payment methods',
        'order.delivery.addComment': 'Add a comment to the order',
        'order.delivery.promoCode': 'I have a promo code or certificate',
        'order.delivery.callMe': 'You can call me to confirm the order',
        'order.delivery.cashOnDelivery': 'Cash on delivery',
        'order.delivery.online': 'Online',
        'order.delivery.pickup': 'Pickup',
        'order.delivery.novaPost': 'Nova post',
        'order.delivery.novaPost.postMachine': 'Nova post (post machine)',
        'order.delivery.ukrpost': 'Ukrpost',
        'order.status': 'Status: ',
        'order.status.issued': 'issued',
        'order.paymentByCard': 'Payment by card',
        'order.paymentByCard.cardNumber': 'Card number',
        'order.paymentByCard.saveTheCard': 'Save the card',
        'order.paymentByCard.pay': 'Pay',

        'profile.contactInformation': 'Contact Information',
        'profile.addressBook': 'Address book',
        'profile.wishlist': 'Wishlist',
        'profile.orderHistory': 'Order history',
        'profile.contactInformation.oldPassword': 'Old password',
        'profile.contactInformation.newPassword': 'New password',
        'profile.contactInformation.passwordVerification': 'Password verification',
        'profile.save': 'Save',
        'profile.addressBook.edit': 'Edit',
        'profile.wishlist.listIsEmpty': 'The list is empty',
        'profile.orderHistory.order': 'Order No.',
        'profile.orderHistory.delivered': 'Delivered',
        'profile.orderHistory.inProcess': 'In process',
        'profile.orderHistory.cancelled': 'Cancelled',
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