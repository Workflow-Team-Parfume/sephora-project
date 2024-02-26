namespace CleanArchitecture.Application.Dtos.Characteristics;

public record CharacteristicDto(
    // if Id is 0, it means that the characteristic is new
    // else just update the existing one
    long Id = 0,
    string NameEn = "",
    string NameUa = "",
    string ValueEn = "",
    string ValueUa = ""
);
