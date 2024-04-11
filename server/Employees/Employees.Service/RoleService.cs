using Employees.Core.Enitities;
using Employees.Core.Repositories;
using Employees.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Service
{
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }
        public IEnumerable<Role> GetAll()
        {
            var roles = _roleRepository.GetAll();
            return roles;
        }
        public Role GetById(int id)
        {
            return _roleRepository.GetById(id);
        }
        public async Task<Role> PostAsync(Role value)
        {
            return await _roleRepository.PostAsync(value);
        }
    }
}
