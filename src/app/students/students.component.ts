import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
// import { STUDENTS } from '../mock-students';
import { MockServiceService } from '../mock-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  allStudents: Student[];
  selectedStudent: Student;

  onSelectedStudent(student) {
    this.selectedStudent = student;
  }

  constructor(private mockService: MockServiceService) { }

  ngOnInit() {
    this.getStudentsFromService();
  }

  getStudentsFromService(): void{
    this.allStudents = this.mockService.getStudentsFromMockFile();
  }

}
