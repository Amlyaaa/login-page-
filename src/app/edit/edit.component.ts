import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDataService } from '../service-data.service'; // Import your service here
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userId!: string;
  updateForm!: FormGroup;
  empData!:any;
  Data: any;
  router: any;

  constructor(private service:ServiceDataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http:HttpClient
  ) {  this.route.params.subscribe((params) => {
    this.userId = params['id'];
    
    //this.getDetailsall(this.userId);
    this.service.getDetail(this.userId).subscribe((Data) => {
      this.empData = Data;
      this.initialize()
    });

    

  });}

  ngOnInit(): void {
  debugger;
   
  }
initialize(){
  this.updateForm = this.formBuilder.group({
    id:[this.empData.id],
    fname: [this.empData.fname, Validators.required],
    lname: [this.empData.lname, Validators.required],
    adrs: [this.empData.adrs],
    city: [this.empData.city],
    state: [this.empData.state],
    zip: [this.empData.zip],
    phn: [this.empData.phn],
    mail: [this.empData.mail, Validators.email]
  });
}
  // getDetailsall(userId:any){
  //   this.service.getDetail(this.service,this.empData).subscribe((result=>{
      
  //     console.log()
  //   }))
  // }


  onSubmit() {
       if(this.service.update(this.userId,this.updateForm.value).subscribe((result)=>{})){
        alert("Data Updated Successfully!");
        this.router.navigate(['/home']);

       }
  }
}
