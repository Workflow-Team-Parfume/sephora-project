export interface IBanner{
    title:string;
    description:string;
    link:string;
    image:string;
}

export interface IFullSizeBanner{
    link:string;
    image:string;
}

export interface IMainBanner{
    title:string;
    description:string|undefined;
    link:string;
    image:string;
    width:string;
}