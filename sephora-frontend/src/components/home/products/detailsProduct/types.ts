import { IReview } from "../../reviews/types";

export interface IProduct{
    name:string;
    categoryName:string;
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
