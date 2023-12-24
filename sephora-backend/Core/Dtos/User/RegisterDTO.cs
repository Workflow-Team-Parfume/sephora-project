namespace Core.Dtos.User;

public class RegisterDto
{
    public string Username { get; set; } = String.Empty;
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