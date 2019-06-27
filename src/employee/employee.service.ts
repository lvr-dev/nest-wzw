import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async create(employee: Employee) {
    const createdEmployee = this.employeeRepository.create(employee);
    return this.employeeRepository.save(createdEmployee);
  }
}
