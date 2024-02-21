import laneige from "./image/products/laneige.png";
import skinTra1 from "./image/products/skinTra1.png";
import skinTra2 from "./image/products/skinTra2.png";
import innisfree from "./image/products/innisfree.png";
import gisou from "./image/products/gisou.png";
import laneige2 from "./image/products/laneige2.png";
import ordinary from "./image/products/ordinary.png";
import rare from "./image/products/rare.png";
import valentino from "./image/products/valentino.png";
import marc from "./image/products/marc.png";
import burberry from "./image/products/burberry.png";
import gucci from "./image/products/gucci.png";

export const newProducts = ([
    {
        id: 0,
        name: "SkinTra — C The Light",
        pictures: [skinTra1],
        categoryName: "Сироватка з вітаміном С Tetra 10%",
        volume: [{volume: "30мл", price: '850'}],
        rating: 2,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "LANEIGE Cica Sleeping Mask",
        pictures: [laneige],
        categoryName: "Нічна маска для чутливої та подразненої шкіри обличчя",
        volume: [{volume: "60мл", price: '1307'}],
        rating: 2,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "SkinTra — Wash It Off",
        pictures: [skinTra2],
        categoryName: "Гель для вмивання обличчя з глюкозидами",
        volume: [{volume: "200мл", price: '515'}],
        rating: 5,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "Innisfree Super Volcanic Pore Clay Mask",
        pictures: [innisfree],
        categoryName: "Інтенсивна маска з вулканічною глиною",
        volume: [{volume: "100мл", price: '720'}],
        rating: 5,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    }
]);

export const Populars = ([
    {
        id: 0,
        name: "Honey Infused Lip Oil",
        pictures: [gisou],
        categoryName: "Олія для губ",
        rating: 3,
        volume: [{volume: '', price: '1720'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "LANEIGE Lip Sleeping Mask 3 г",
        pictures: [laneige2],
        categoryName: "Ягідна маска для губ",
        rating: 2,
        volume: [{volume: '', price: '315'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "The Ordinary — Niacinamide 10% + Zinc 1%",
        pictures: [ordinary],
        categoryName: "Сироватка з ніацинамідом та цинком",
        volume: [{volume: '60мл', price: '350'}],
        rating: 5,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "Find Comfort Body & Hair Fragrance Mist",
        pictures: [rare],
        categoryName: "Міст для тіла та волосся",
        rating: 5,
        volume: [{volume: '', price: '1050'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    }
]);

export const Perfume: IProduct[] = ([
    {
        id: 0,
        name: "Valentino Donna Born In Roma Intense",
        pictures: [valentino],
        categoryName: "Парфумована вода",
        rating: 5,
        volume: [{volume: '', price: '4500'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: [],
        product: null,
    },
    {
        id: 0,
        name: "Marc Jacobs Daisy",
        pictures: [marc],
        categoryName: "Парфумована вода",
        rating: 4,
        volume: [{volume: '', price: '3270'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        product: null,
        reviews: []
    },
    {
        id: 0,
        name: "Tom Ford Lost Cherry",
        pictures: [burberry],
        categoryName: "Парфумована вода унісекс",
        rating: 5,
        volume: [{volume: '30ml', price: '3750'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        product: null,
        reviews: []
    },
    {
        id: 0,
        name: "Gucci Flora Gorgeous Gardenia",
        pictures: [gucci],
        categoryName: "Парфюмированная вода жіноча",
        rating: 4,
        volume: [{volume: '', price: '7325'}],
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        product: null,
        reviews: []
    }
]);


import Anna from "./image/reviews/Anna.png"
import Dariia from "./image/reviews/Dariia.png"
import Natalia from "./image/reviews/Natalia.png"
import estee from "./image/reviews/estee.png"
import moschino from "./image/reviews/moschino.png"
import uriage from "./image/reviews/uriage.png"

export const Reviews1 = (
    {
        userName: "Анна",
        rating: 4,
        review: "Все прийшло швидко та добре упаковано. Аромат приємний, веселий та легкий. На літо те, що треба",
        userImage: Anna,
        productImage: moschino,
        productName: "Moschino Funny",
        productCategory: "Туалетна вода"
    }
);
export const Reviews2 = (
    {
        userName: "Наталія",
        rating: 5,
        review: "Супер тональний! Наноситься рівномірно, має матовий фініш, гарне перекриття недоліків. Я брала тон 1N2 Ecru",
        userImage: Natalia,
        productImage: estee,
        productName: "Estée Lauder Double Wear",
        productCategory: "Тональний крем"
    }
);

export const Reviews3 = (
    {
        userName: "Дарья",
        rating: 4,
        review: "Найкращий бальзам для губ з тих що я купувала. Відновлює пошкоджену і суху шкіру губ за 1 день",
        userImage: Dariia,
        productImage: uriage,
        productName: "Uriage",
        productCategory: "Відновлювальний бальзам для губ"
    }
)


import banner1 from "./image/banner/image1.png"
import banner2 from "./image/banner/image2.png"
import banner3 from "./image/banner/image3.png"
import main1 from "./image/banner/main1.png"
import main2 from "./image/banner/main2.png"

export const Banner1 = ({
    title: "-20%  на догляд  за обличчям та тілом",
    description: "Акція триває до 28.01.2024. Не пропустіть свій шанс на прекрасний початок дня!",
    link: "",
    image: banner1
})

export const Banner2 = ({
    title: "Новий Yves Saint Laurent",
    description: "відкрийте для себе Black Opium Over Red — соковитий варіант культового аромату, тепер із вишневим відтінком",
    link: "",
    image: banner2
})

export const Banner3 = ({image: banner3, link: ""})

export const mainBanner = ([
    {
        title: "Знижка 20% на товар найменшої вартості за умови придбання двох акційних товарів Hugo Boss",
        link: "", image: main1, width: "600px", description: ""
    },
    {
        title: "Відкрийте унікальні продукти Cosmed!",
        description: "Це бренд космецевтики, яка подбає про найвибагливішу шкіру",
        link: "",
        image: main2,
        width: "400px"
    }
])


export const Reviews = ([
    {
        userName: "Дарья",
        rating: 2,
        review: "Аромат непоганий, мені нагадує солодкі цукерки, але на жаль зовсім не стійкі. Подарунок хлопця, другий раз не візьму.",
        userImage: null,
        date: '28.01.24'
    },
    {
        userName: "Ангеліна",
        rating: 5,
        review: "Кохання з першого пшику ,неймовірний ,компліментарний ,легендарний ! Мабуть єдиний аромат (а в мене велика колекція) ,який настільки запав у душу ! Але перед покупкою краще зробити затест ,тому що вони досить важкі і не всім підійдуть",
        userImage: null,
        date: '04.01.24'
    },
    {
        userName: "Ганна",
        rating: 5,
        review: "Дуже стійкий,витончений аромат",
        userImage: null,
        date: '23.01.24'
    },
    {
        userName: "Вікторія",
        rating: 5,
        review: "Сумнівалась що прийде оригінал, замовляла 30мл з Європи, також пульверизатор не такий як в 80мл",
        userImage: null,
        date: '18.01.24'
    },
    {
        userName: "Марта",
        rating: 5,
        review: "Довго не могла знайти справді \"свій\" аромат. Парфуми, справді варті уваги.",
        userImage: null,
        date: '18.01.24'
    },
    {
        userName: "Ольга",
        rating: 5,
        review: "Моя любов любовна! Надзвичайно приємний , густий, насичений аромат. Стійкий та шлейфовий. Користувалась взимку та холодною весною. Не дивлячись на те що зараз літо - рука тягнеться до них, але я себе стримую (думаю про оточуючих). Для більшості цей аромат для літа буде дуже тяжкий.",
        userImage: null,
        date: '04.01.24'
    },
]);

export const Characteristics = ([
    {name: "Прем'єра аромату", characteristics: ["2016"]},
    {name: "Країна ТМ", characteristics: ["США"]},
    {name: "Зроблено в", characteristics: ["Іспанія"]},
    {name: "Стать", characteristics: ["для жінок"]},
    {name: "Класифікація", characteristics: ["елітна"]},
    {name: "Тип аромату", characteristics: ["квіткові", "східні"]},
    {name: "Початкова нота", characteristics: ["Бергамот", "Кава", "Лимон", "Мигдаль"]},
    {
        name: "Нота серця",
        characteristics: ["Болгарська троянда", "Жасмин самбак", "Квітка апельсина", "Корінь іриса", "Тубероза"]
    },
    {
        name: "Кінцева нота",
        characteristics: ["Амбра", "Боби тонка", "Ваніль", "Какао", "Кващемірове дерево", "Кедр", "Кориця", "Мускус", "Пачулі", "Праліне", "Сандал"]
    },
]);


import goodGirl1 from '../home/products/detailsProduct/images/goodGirl1.png'
import goodGirl2 from '../home/products/detailsProduct/images/goodGirl2.png'
import goodGirl3 from '../home/products/detailsProduct/images/goodGirl3.png'
import goodGirl4 from '../home/products/detailsProduct/images/goodGirl4.png'
import goodGirl5 from '../home/products/detailsProduct/images/goodGirl5.png'

export const DetailsProduct = ({
    id: 1,
    name: "Carolina Herrera Good Girl",
    categoryName: "Парфумована вода",
    volume: [{volume: "50ml", price: "2660"}, {volume: "30ml", price: "1900"}],
    pictures: [goodGirl1, goodGirl2, goodGirl3, goodGirl4, goodGirl5],
    rating: 5,
    description: "Загадковий і вабливий східний аромат Carolina Herrera Good Girl стане прекрасним доповненням до образу справжньої спокусниці. Перші ноти представленого шедевра звучать ароматною чорною кавою й терпким мигдалем. За ними слідує серцевий акорд - це поєднання жасмину самбака і туберози. Завершує цей пряний шедевр легкий шлейф із бобів тонка та какао. Композиція Carolina Herrera Good Girl обов'язково сподобається витонченій представниці прекрасної статі, адже її ноти, які розбурхують уяву, нікого не залишають байдужим. Парфуми, немов прозорою вуаллю, огортають тіло і чудово доповнюють і без того неймовірно привабливий образ своєї власниці. Carolina Herrera Good Girl - це ароматне втілення жіночності та флірту в одному флаконі.",
    characteristics: Characteristics,
    codeProduct: 283295,
    reviews: Reviews,
    isNew: false,
    product: null,
});

import pradaParadoxe from './products/detailsProduct/images/Prada Paradoxe.png';
import yves from './products/detailsProduct/images/Yves Saint Laurent Libre.png';
import dior1 from './products/detailsProduct/images/DIOR — Sauvage Parfum.png';
import dior2 from './products/detailsProduct/images/DIOR — Miss Dior.png';

export const similarProducts = ([
    {
        id: 0,
        name: "Prada Paradoxe",
        pictures: [pradaParadoxe],
        categoryName: "Парфумована вода",
        volume: [{volume: '90ml', price: '4171'}],
        rating: 4,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "Yves Saint Laurent Libre",
        pictures: [yves],
        categoryName: "Парфумована вода",
        volume: [{volume: '', price: '2028'}],
        rating: 4,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "DIOR — Sauvage Parfum",
        pictures: [dior1],
        categoryName: "Парфумована вода",
        volume: [{volume: '100ml', price: '6430'}],
        rating: 3,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "DIOR — Miss Dior",
        pictures: [dior2],
        categoryName: "Парфумована вода",
        volume: [{volume: '30ml', price: '3614'}],
        rating: 3,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
])

import apieu from './products/detailsProduct/images/A\'pieu  Milk.png';
import bielenda from './products/detailsProduct/images/Bielenda.png';
import byredo from './products/detailsProduct/images/Byredo.png';
import burberry2 from './products/detailsProduct/images/burberry.png';
import {IProduct} from "./products/types.ts";

export const especiallyForYou = ([
    {
        id: 0,
        name: "A'pieu  Milk One Pack Mask — Banana",
        pictures: [apieu],
        categoryName: "Живильна тканинна маска",
        volume: [{volume: '21g', price: '100'}],
        rating: 4,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "Bielenda Professional — Satin Face Tonic in Gel",
        pictures: [bielenda],
        categoryName: "Гелевий тонік для обличчя",
        volume: [{volume: '500ml', price: '515'}],
        rating: 4,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "Byredo Bal d'Afrique",
        pictures: [byredo],
        categoryName: "Парфумована вода",
        volume: [{volume: '', price: '144'}],
        rating: 4,
        isNew: true,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
    {
        id: 0,
        name: "BURBERRY — Hero",
        pictures: [burberry2],
        categoryName: "Парфумована вода",
        volume: [{volume: '50ml', price: '1853'}],
        rating: 3,
        isNew: false,
        description: "",
        characteristics: [],
        codeProduct: 123,
        reviews: []
    },
])

export const Filters = ([
    {name: 'Група товару', filters: ['Гель для вмивання', 'Крем для обличчя']},
    {name: 'Бренд', filters: ['La Roche-Posay', 'Sane']},
    {name: 'Вартість', filters: ['500 - 750грн', '750 - 1000 грн']},
    {name: 'Вік', filters: ['18+', '25+']},
])

export const Filter = ({
    name: 'Новинки',
    filters: ['Макіяж', 'Догляд за обличчям', 'Волосся']
})
