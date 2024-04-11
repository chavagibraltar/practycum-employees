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
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            var employees = await _employeeRepository.GetAllAsync();
            return employees;
        }
        public Employee GetById(int id)
        {
            return _employeeRepository.GetById(id);
        }
        public async Task<Employee> PostAsync(Employee value)
        {
            return await _employeeRepository.PostAsync(value);
        }
        public async Task<Employee> PutAsync(int id, Employee value)
        {
            return await _employeeRepository.PutAsync(id, value);
        }
        public void Delete(int id)
        {
            _employeeRepository.Delete (id);         
        }
        public void Archiv(int id)
        {
            _employeeRepository.Archiv(id);         
        }
    }
}
