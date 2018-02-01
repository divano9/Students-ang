import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';

@Injectable()
export class MockServiceService {

  constructor() { }

  getStudentsFromMockFile(): Student[] {
    return STUDENTS;
  }

}
