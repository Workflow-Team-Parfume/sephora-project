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
    {name: "SkinTra — C The Light",price: "850",image: skinTra1, categoryName: "Сироватка з вітаміном С Tetra 10%", volume: "30мл", rating: 2},
    {name: "LANEIGE Cica Sleeping Mask",price: "1307",image: laneige, categoryName: "Нічна маска для чутливої та подразненої шкіри обличчя", volume: "60мл", rating: 2},
    {name: "SkinTra — Wash It Off",price: "515",image: skinTra2, categoryName: "Гель для вмивання обличчя з глюкозидами", volume: "200мл", rating: 5},
    {name:"Innisfree Super Volcanic Pore Clay Mask",price:"720",image:innisfree, categoryName: "Інтенсивна маска з вулканічною глиною", volume: "100мл", rating: 5}
]);

export const Populars = ([
    {name:"Honey Infused Lip Oil",price:"1 720",image:gisou, categoryName: "Олія для губ", rating: 3, volume: null},
    {name:"LANEIGE Lip Sleeping Mask 3 г",price:"315",image:laneige2, categoryName: "Ягідна маска для губ", rating: 2, volume: null},
    {name:"The Ordinary — Niacinamide 10% + Zinc 1%",price:"350",image:ordinary, categoryName: "Сироватка з ніацинамідом та цинком", volume: "60мл", rating: 5},
    {name:"Find Comfort Body & Hair Fragrance Mist",price:"1 050",image:rare, categoryName: "Міст для тіла та волосся", rating: 5, volume: null}
]);

export const Perfume = ([
    {name:"Valentino Donna Born In Roma Intense",price:"4 500",image:valentino, categoryName: "Парфумована вода", rating: 5, volume: null},
    {name:"Marc Jacobs Daisy",price:"3 270",image:marc, categoryName: "Парфумована вода", rating: 4, volume: null},
    {name:"Tom Ford Lost Cherry 30 мл",price:"3 750",image:burberry, categoryName: "Парфумована вода унісекс", rating: 5, volume: null},
    {name:"Gucci Flora Gorgeous Gardenia",price:"7 325",image:gucci, categoryName: "Парфюмированная вода жіноча", rating: 4, volume: null}
]);


import Anna from "./image/reviews/Anna.png"
import Dariia from "./image/reviews/Dariia.png"
import Natalia from "./image/reviews/Natalia.png"
import estee from "./image/reviews/estee.png"
import moschino from "./image/reviews/moschino.png"
import uriage from "./image/reviews/uriage.png"

export const Reviews1 = (
    {userName:"Анна",
    rating:4,
    reviews:"Все прийшло швидко та добре упаковано. Аромат приємний, веселий та легкий. На літо те, що треба",
    userImage:Anna,
    productImage:moschino,
    productName:"Moschino Funny",
    productCategory:"Туалетна вода"}
);
export const Reviews2 = (
    {userName:"Наталія",
    rating:5,
    reviews:"Супер тональний! Наноситься рівномірно, має матовий фініш, гарне перекриття недоліків. Я брала тон 1N2 Ecru",
    userImage:Natalia,
    productImage:estee,
    productName:"Estée Lauder Double Wear",
    productCategory:"Тональний крем"}
);

export const Reviews3 = (
    {userName:"Дарья",
    rating:4,
    reviews:"Найкращий бальзам для губ з тих що я купувала. Відновлює пошкоджену і суху шкіру губ за 1 день",
    userImage:Dariia,
    productImage:uriage,
    productName:"Uriage",
    productCategory:"Відновлювальний бальзам для губ"}
)


import banner1 from "./image/banner/image1.png"
import banner2 from "./image/banner/image2.png"
import banner3 from "./image/banner/image3.png"
import main1 from "./image/banner/main1.png"
import main2 from "./image/banner/main2.png"

export const Banner1 = ({
    title:"-20%  на догляд  за обличчям та тілом",
    description:"Акція триває до 28.01.2024. Не пропустіть свій шанс на прекрасний початок дня!",
    link:"",
    image:banner1
})

export const Banner2 = ({
    title:"Новий Yves Saint Laurent",
    description:"відкрийте для себе Black Opium Over Red — соковитий варіант культового аромату, тепер із вишневим відтінком",
    link:"",
    image:banner2
})

export const Banner3 = ({image:banner3, link:""})

export const mainBanner = ([
    {title:"Знижка 20% на товар найменшої вартості за умови придбання двох акційних товарів Hugo Boss",
    link:"", image:main1, width:"600px", description:""},
    {title:"Відкрийте унікальні продукти Cosmed!",
    description:"Це бренд космецевтики, яка подбає про найвибагливішу шкіру", link:"", image:main2, width:"400px"}
])


export const recCategories = ([
    {name:"Душ та ванна", link:""},
    {name:"Аксесуари", link:""},
    {name:"Вітаміни", link:""},
    {name:"Обличчя", link:""},
])