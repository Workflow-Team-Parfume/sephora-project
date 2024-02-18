export default interface DeliveryDto {
    get id(): number;
    get address(): string;
    get provider(): string;

    get userId(): number;
    get userName(): string;
    get userEmail(): string;
    get userPhone(): string;

    // TODO: Add the following properties to the DeliveryDto interface:
    // get status(): string;
    // get createdAt(): Date;
    // get createdBy(): string;
    // get deliveryDate(): Date;
}
