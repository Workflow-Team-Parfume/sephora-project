export default interface CartItem {
    get id(): number;

    get productId(): number;
    get productPieceId(): number;

    get productName(): string;
    get productDescription(): string;
    get productImage(): string;

    get brandName(): string;

    get categoryName(): string;

    get quantity(): number;
    get price(): number;
    get total(): number;
}