import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observe';
  students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
        console.log("Testing");
    }    
}
