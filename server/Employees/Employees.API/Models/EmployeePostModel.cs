using Employees.Core.Enitities;

namespace Employees.API.Models
{
    public class EmployeePostModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Tz { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender gender { get; set; }
        //public bool IsActive { get { return IsActive; } set { IsActive = true; } }
        public bool IsActive { get; set; }
        public List<RoleEmployeePostModel> Roles { get; set; }

    }
}
