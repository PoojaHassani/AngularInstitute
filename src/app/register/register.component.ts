import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  url:string="";
  InstituteForm: FormGroup;

  constructor(private http: HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.InstituteForm=this.formBuilder.group({
      instituteCode :[''],
      diseCode :[''],
      instituteName:[''],
      universityName:[''],
      universityState:[''],
      studentScore:[''],
    
    })

    addInstitute() : void{
      this.http.post(this.url, this.InstituteForm.value).subscribe(data => {
        alert('Student is added');

    }

  }

}
