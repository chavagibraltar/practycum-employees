using AutoMapper;
using Employees.API.Models;
using Employees.Core.Enitities;

namespace Employees.API.Mapping
{
    public class ApiMappingProfile : Profile
    {
        public ApiMappingProfile()
        {
            CreateMap<EmployeePostModel, Employee>().ReverseMap();
            CreateMap<RoleEmployeePostModel, RoleEmployee>().ReverseMap();
            CreateMap<RolePostModel, Role>().ReverseMap();
        }
    }
}
