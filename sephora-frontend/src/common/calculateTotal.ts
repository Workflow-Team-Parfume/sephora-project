import OrderDto from "../models/order/OrderDto";
import ProductPieceDto from "../models/piece/ProductPieceDto";

export function CalculateOrderTotal(order:OrderDto): number {
    const total: number = order.products.reduce((acc, piece) => acc + piece.productPiece.price * piece.quantity, 0);
    return total;
}
export function CalculateProductTotal(pieces: ProductPieceDto[]): number {
    const total: number = pieces.reduce((acc, piece) => acc + piece.price, 0);
    return total;
}