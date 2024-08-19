import { Student } from './interface/student.interface';
import { Model } from 'mongoose';
import { StudentDTO } from './dto/student.dto';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<Student>);
    getStudents(): String;
    createStudent(data: StudentDTO): Promise<Student>;
    getStudentById(id: string): Promise<Student | null>;
    updateStudent(id: string, data: Partial<StudentDTO>): Promise<Student | null>;
    deleteStudent(id: string): Promise<Student | null>;
}
