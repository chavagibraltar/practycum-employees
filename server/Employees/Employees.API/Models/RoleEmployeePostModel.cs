namespace Employees.API.Models
{
    public class RoleEmployeePostModel
    {
        public int RoleId { get; set; }
        public bool IsAdministrative { get; set; }
        public DateTime StartDate { get; set; }
    }
}
