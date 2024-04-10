import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup

  constructor(private formBuilder :FormBuilder,private http: HttpClient,private router:Router,private servicename:ServiceDataService){}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      mail:[' ',[Validators.required,Validators.email]],
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
  
//   loginForm=new FormGroup({
//     user: new FormControl('',[Validators.required,Validators.email]),
//     Password: new FormControl('',[Validators.required,Validators.minLength(5)])
// })

loginUser(){
  debugger;
         this.servicename.getlogindetail(this.loginForm.value).subscribe((res:any)=>{
          if(res.Success == true){
            alert("Login Sucessfull!");
            this.router.navigate(['home'])
          }
          else{
            alert("You Are Not Loggefd in!")
          }
         })
}
 
get user(){
  return this.loginForm.get('mail');
}
get Password(){
  return this.loginForm.get('Password');
}
// getData(){
//   localStorage.setItem('form-data',JSON.stringify(this.loginForm.value));
// }

}
