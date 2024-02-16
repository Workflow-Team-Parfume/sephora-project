import ProductPicture from "./ProductPicture.ts";
import Product from "./Product.ts";

export default interface ProductPiece {
    get id(): number;
    get inStock(): number;
    get price(): number;
    get milliliters(): number;
    get isBottledParfume(): boolean;
    get productId(): number;
    get product(): Product;
    get pictures(): ProductPicture[];

    get createdAt(): Date;
    get isNew(): boolean;
}
