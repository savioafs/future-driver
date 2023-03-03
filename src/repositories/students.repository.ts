import { Student } from "../model/student.model";

// Data transfer object
interface interfaceCreateStudentDTO {

  name: string;
  cpf: string;
  typeOfClass: string;
  instructor: string;
}

class StudentRepository {

  private students: Student[];

  constructor() {
    this.students = [];
  };

  createStudent({ name, cpf, typeOfClass, instructor } : interfaceCreateStudentDTO) {
    const student = new Student();

    Object.assign(student, {
      name,
      cpf,
      typeOfClass,
      instructor,
      studentSince: new Date()
    });

    this.students.push(student)
  };

  listStudents(): Student[]{
    return this.students
  };

  findByCPF(cpf: number): Student {
    const student = this.students.find(student => cpf === student.cpf);

    return student
  };

};

export { StudentRepository }