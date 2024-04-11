using AutoMapper;
using Employees.API.Models;
using Employees.Core.DTOs;
using Employees.Core.Enitities;
using Employees.Core.Services;
using Employees.Service;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Employees.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;
        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _mapper = mapper;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var list = await _employeeService.GetAllAsync();
            var listDto = list.Select(e => _mapper.Map<EmployeeDto>(e));
            return Ok(listDto);
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var employee = _employeeService.GetById(id);
            var employeeDto = _mapper.Map<EmployeeDto>(employee);
            return Ok(employeeDto);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EmployeePostModel value)
        {
            var employeeToAdd = _mapper.Map<Employee>(value);
            var addedEmployee = await _employeeService.PostAsync(employeeToAdd);
            var newEmployee = _employeeService.GetById(addedEmployee.Id);
            var employeeDto = _mapper.Map<EmployeeDto>(newEmployee);
            return Ok(employeeDto);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] EmployeePostModel value)
        {
            var existEmployee = _employeeService.GetById(id);
            if (existEmployee is null)
            {
                return NotFound();
            }
            _mapper.Map(value, existEmployee);
            await _employeeService.PutAsync(id, existEmployee);
            return Ok(_mapper.Map<EmployeeDto>(existEmployee));
        }
        
        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var employee = _employeeService.GetById(id);
            if (employee is null)
            {
                return NotFound();
            }
            _employeeService.Delete(id);
            return NoContent();
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("/api/employee/archiv/{id}")]
        public ActionResult Archiv(int id)
        {
            var employee = _employeeService.GetById(id);
            if (employee is null)
            {
                return NotFound();
            }
            _employeeService.Archiv(id);
            return NoContent();
        }

    }
}
