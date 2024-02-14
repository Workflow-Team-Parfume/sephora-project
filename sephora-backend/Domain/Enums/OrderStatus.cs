namespace CleanArchitecture.Domain.Enums;

public enum OrderStatus
{
    INDETERMINATE,
    PENDING,
    CANCELLED_BY_USER,
    CANCELLED_BY_ADMIN,
    CONFIRMED,
    DELIVERING,
    DELIVERED,
    REFUNDED,
    INDIVIDUALIZED,
    INCOMPLETE,
}
