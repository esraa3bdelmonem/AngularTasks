import { Component } from '@angular/core';
import {Student} from './../student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 
   std = new Student(1,"esraa",26);
 

}


