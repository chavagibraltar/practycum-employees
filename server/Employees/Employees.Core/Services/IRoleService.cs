using Employees.Core.Enitities;
using Employees.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Core.Services
{
    public interface IRoleService
    {
        public IEnumerable<Role> GetAll();
        public Role GetById(int id);
        public Task<Role> PostAsync(Role value);
    }
}
