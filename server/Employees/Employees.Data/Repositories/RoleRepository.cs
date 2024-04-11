using Employees.Core.Enitities;
using Employees.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Data.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;
        public RoleRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<Role> GetAll()
        {
            return _context.Roles;
        }

        public Role GetById(int id)
        {
            return _context.Roles.Find(id);
        }
        public async Task<Role> PostAsync(Role value)
        {
            await _context.Roles.AddAsync(value);
            await _context.SaveChangesAsync();
            return value;
        }
    }
}
