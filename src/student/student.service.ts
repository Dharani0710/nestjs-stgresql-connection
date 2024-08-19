import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './interface/student.interface';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/student.dto';
import { promises } from 'dns';

@Injectable()
export class StudentService { 
    constructor(@InjectModel('Student') private studentModel: Model<Student>) {}
    getStudents():String{
        return'hi  am from Student Service';
    }
    async createStudent(data:StudentDTO):Promise<Student>{
         const student =new this.studentModel(data);
         return await student.save();
    }

    async getStudentById(id: string): Promise<Student | null> {
        return await this.studentModel.findById(id).exec();
      }
      async updateStudent(id: string, data: Partial<StudentDTO>): Promise<Student | null> {
        return await this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();}
 
        async deleteStudent(id: string): Promise<Student | null> {
    return await this.studentModel.findByIdAndDelete(id).exec();
    }
}
