export default interface EditProductDto {
    get id(): number;
    get name(): string | null;
    get description(): string;
    get active(): boolean;
    get brandId(): number;
    get categoryId(): number;
}
