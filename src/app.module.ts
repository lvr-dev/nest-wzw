import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

const dbPassw = process.env.DB_PASSW;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'leonie',
      password: dbPassw,
      database: 'wzw_db',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true
    }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
