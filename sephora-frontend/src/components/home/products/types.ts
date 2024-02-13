// export interface IProduct{
//     name:string;
//     categoryName:string;
//     volume:string|null;
//     price:string;
//     image:string;
//     rating:number;
//     isNew:boolean;
// }

import { IReview } from "../reviews/types";

export interface IProduct{
    id:number;
    name:string;
    categoryName:string;
    isNew:boolean;
    volume:IVolume[];
    images:string[];
    rating:number;
    description:string;
    characteristics:ICharasteristic[];
    codeProduct:number;
    reviews:IReview[];
}

export interface ICharasteristic{
    name:string;
    characteristics:string[];
}

export interface IVolume{
    volume: string;
    price: string;
}