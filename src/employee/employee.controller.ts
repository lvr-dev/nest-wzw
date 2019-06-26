import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../interfaces/employee.interface';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
}
