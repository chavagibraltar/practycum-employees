using Employees.Core.Enitities;
using Employees.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Data.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        public EmployeeRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            return await _context.Employees.Include(roleEmployee => roleEmployee.Roles).ThenInclude(roleEmployee => roleEmployee.Role).ToListAsync();
        }

        public Employee GetById(int id)
        {
            return _context.Employees.Include(roleEmployee => roleEmployee.Roles).ThenInclude(roleEmployee => roleEmployee.Role).FirstOrDefault(e => e.Id == id);//.Find(id);
        }
        public async Task<Employee> PostAsync(Employee value)
        {
            await _context.Employees.AddAsync(value);
            await _context.SaveChangesAsync();
            return value;
        }
        public async Task<Employee> PutAsync(int id, Employee value)
        {
            Employee e = GetById(id);
            if (e != null)
            {
                e.FirstName = value.FirstName;
                e.LastName = value.LastName;
                e.StartDate = value.StartDate;
                e.BirthDate = value.BirthDate;
                e.Tz = value.Tz;
                e.Gender = value.Gender;
                e.IsActive = value.IsActive;
                e.Roles = value.Roles;
            }
            await _context.SaveChangesAsync();
            return _context.Employees.Include(roleEmployee => roleEmployee.Roles).ThenInclude(roleEmployee => roleEmployee.Role).FirstOrDefault(e => e.Id == id);//.Find(id);

        }
        public void Delete(int id)
        {
            Employee e = GetById(id);
            e.IsActive = false;      
            _context.SaveChanges();
        }
        public void Archiv(int id)
        {
            Employee e = GetById(id);
            e.IsActive = true;      
            _context.SaveChanges();
        }
    }
}
