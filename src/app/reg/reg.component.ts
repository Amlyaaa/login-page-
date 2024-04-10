import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  public regi!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regi = this.formbuilder.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      adrs: ['', [Validators.required, Validators.pattern('^[ a-zA-Z][a-zA-Z ]*$')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      zip: ['', [Validators.required]],
      phn: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]]
    });
  }

  SignUp() {
    this.http.post<any>('http://localhost:3000/add-emp', this.regi.value).subscribe(
      res => {
        alert('You Successfully registered!');
        this.regi.reset();
        this.router.navigate(['home']);
      },
      err => {
        alert('Something Went Wrong!');
      }
    );
  }

  get fname() {
    return this.regi.get('fname');
  }
  get lname() {
    return this.regi.get('lname');
  }
  get adrs() {
    return this.regi.get('adrs');
  }
  get city() {
    return this.regi.get('city');
  }
  get state() {
    return this.regi.get('state');
  }
  get zip() {
    return this.regi.get('zip');
  }
  get phn() {
    return this.regi.get('phn');
  }
  get mail() {
    return this.regi.get('mail');
  }
}
