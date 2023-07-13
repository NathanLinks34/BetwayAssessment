using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
namespace LoginApi.Controllers
{
    [ApiController]
    [Route("Login")]
    public class LoginController : ControllerBase
    {
         [EnableCors("CorsPolicy")]
        [HttpPost]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            
            if (IsValidLogin(request.Email, request.Password))
            {
                
                return Ok(new { message = "Login successful" });
            }
            
            return Unauthorized(new { message = "Invalid email or password" });
        }
        
        private bool IsValidLogin(string email, string password)
        {

            return email == "andasizani97@gmail.com" && password == "React@facebook";
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
