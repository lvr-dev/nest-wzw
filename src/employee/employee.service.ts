import { Injectable } from '@nestjs/common';
import { Employee } from '../interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  private readonly employees: Employee[] = [];

  findAll(): Employee[] {
    return this.employees;
  }
}
