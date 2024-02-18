namespace CleanArchitecture.Application.Dtos.User;

// TODO: consider adding a pfp here
public class RegisterDto
{
    public string UserName { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string? PhoneNumber { get; set; }
    public string Password { get; set; } = String.Empty; 
    public string PasswordConfirmation { get; set; } = String.Empty;

    //[EnumDataType(typeof(Gender))]
    //public Gender Gender { get; set; }

}
//public enum Gender
//{
//    Male = 1,
//    Female = 2
//}
