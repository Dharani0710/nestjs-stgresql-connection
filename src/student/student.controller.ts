import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
    @Get()
    getStudent():String{
        return 'hi  am from Student controller';
    }
    @Post()
    async CreatStudent(@Body() data:StudentDTO): Promise<Student>{
        return await this.studentService.createStudent(data); 
    }

    @Get(':id')
    async getStudentById(@Param('id') id: string): Promise<Student | null> {
      return this.studentService.getStudentById(id);
    }

    @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() data: Partial<StudentDTO>): Promise<Student | null> {
    return this.studentService.updateStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<Student | null> {
    return this.studentService.deleteStudent(id);
  }


  
}
