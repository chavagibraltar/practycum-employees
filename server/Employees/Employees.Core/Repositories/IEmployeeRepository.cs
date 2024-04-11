using Employees.Core.Enitities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Core.Repositories
{
    public interface IEmployeeRepository
    {
        public Task<IEnumerable<Employee>> GetAllAsync();
        public Employee GetById(int id);
        public Task<Employee> PostAsync(Employee value);
        public Task<Employee> PutAsync(int id, Employee value);
        public void Delete(int id);
        public void Archiv(int id);
    }
}
