export default interface CreateCartItem {
    get productPieceId(): number;
    get quantity(): number;
    get discount(): number;
    get tax(): number;
}
