import { Component } from '@angular/core';
import {Student} from './../student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  std:Student= new Student(0,"",0);
 
 Students:Student[]=[new Student(1,"esraa",26)];
 addFlag=false;
 save(){
  // console.log(this.std)
  
  //let StudentIndex= this.Students.findIndex(obj=>obj.Id=this.std.Id)
 let StudentIndex =-1;
 for(let i =0; i<this.Students.length;i++){
  if(this.std.Id== this.Students[i].Id){
    StudentIndex=i;
   // alert("here");
    break;
  }
 }
  if(StudentIndex !=-1){
   this.Students[StudentIndex].Name=this.std.Name;
   this.Students[StudentIndex].Age=this.std.Age;
  }else{
   this.Students.push(this.std);
  }
  this.std=new Student(0,"",0);

  this.addFlag=false;
 }
 fillInput(student:Student){
  this.addFlag=true;
  this.std.Id=student.Id;
  this.std.Name=student.Name;
  this.std.Age=student.Age;
 }
 deleteINPUT(Id:number){
  
  for(let i =0; i<this.Students.length;i++){
    if(Id== this.Students[i].Id){
      this.Students.splice(i,1);
      break;
    }
   }//let StudentIndex= this.Students.findIndex(x=>x.Id=Id);
 
 }


}



