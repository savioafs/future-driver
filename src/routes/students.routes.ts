import { Router } from 'express';

import { StudentRepository } from '../repositories/students.repository';

const studentsRoutes = Router();

const studentRepository = new StudentRepository();

studentsRoutes.post('/', (req, res) => {
  const { name, cpf, typeOfClass, instructor } = req.body;

  const studenCPFAlreadyExists = studentRepository.findByCPF(cpf);

  if(studenCPFAlreadyExists) {
    return res.status(400).json({error: 'CPF already exists'})
  };
  
  studentRepository.createStudent({ name, cpf, typeOfClass, instructor });

  return res.status(201).json();
});

studentsRoutes.get('/', (req, res) => {
  const students = studentRepository.listStudents();

  return res.status(200).json(students);
})

export { studentsRoutes };