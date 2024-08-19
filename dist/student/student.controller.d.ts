import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudent(): String;
    CreatStudent(data: StudentDTO): Promise<Student>;
    getStudentById(id: string): Promise<Student | null>;
    updateStudent(id: string, data: Partial<StudentDTO>): Promise<Student | null>;
    deleteStudent(id: string): Promise<Student | null>;
}
