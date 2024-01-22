export interface IProduct{
    name:string;
    categoryName:string;
    volume:string|null;
    price:string;
    image:string;
    rating:number;
}

export interface IReviews{
    userName:string;
    rating:number;    
    reviews:string;
    userImage:string;
    productImage:string;
    productName:string;
    productCategory:string;
}

export interface IBanner{
    title:string;
    description:string;
    link:string;
    image:string;
}

export interface IBanner_2{
    link:string;
    image:string;
}

export interface IRecCategory{
    link:string;
    name:string;
}

export interface IMainBanner{
    title:string;
    description:string|undefined;
    link:string;
    image:string;
    width:string;
}