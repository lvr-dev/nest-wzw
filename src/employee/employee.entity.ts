import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeStatus } from '../enums/EmployeeStatus.enum';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 60,
    nullable: true
  })
  firstName: string;

  @Column({
    length: 20,
    nullable: true
  })
  prefix: string;

  @Column({ length: 60})
  lastName: string;

  @Column({
    length: 90,
    nullable: true
  })
  client: string;

  @Column({
    type: 'date',
    nullable: true
  })
  since: Date;

  @Column({
    type: 'date',
    nullable: true
  })
  until: Date;

  @Column()
  visible: boolean;

  @Column({
    type: 'enum',
    enum: EmployeeStatus
  })
  status: string;

  @Index({ unique: true })
  @Column()
  email: string;
}
