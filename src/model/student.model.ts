import { v4 as uuidV4 } from 'uuid';

class Student {

  id?: string;
  name: string;
  cpf: number;
  typeOfClass: string;
  instructor: string;
  studentSince: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    };
  };
};

export { Student };