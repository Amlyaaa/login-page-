import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import {Form, FormControl,FormGroup,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//   loginForm=new FormGroup({
//     name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
//     mail: new FormControl('',[Validators.required,Validators.email]),
//     Password: new FormControl('',[Validators.required,Validators.minLength(5)])
// })
public registerData!:FormGroup;
constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}


ngOnInit(): void {
  this.registerData = this.formbuilder.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    mail:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(5)]]
  })
}
httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization, X-Request-With",
    "preflightContinue": "false"
  })
}

SignUp(){
    this.http.post<any>("http://localhost:3000/register",this.registerData.value).subscribe(res=>{
      alert("You Successfully registered!");
      this.registerData.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something Went Wrong!")
    })
}

loginUser(){
  console.warn(this.registerData.value)

}
get name(){
  return this.registerData.get('name');
}
get mail(){
  return this.registerData.get('mail');
}
get Password(){
  return this.registerData.get('Password');
}
getData(){
  localStorage.setItem('form-data',JSON.stringify(this.registerData.value));
}

}



