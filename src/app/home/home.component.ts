import { Component} from '@angular/core';
import { ServiceDataService } from '../service-data.service';
import { Route,Router } from '@angular/router';

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
user:any;
  data: any;

constructor(private userService:ServiceDataService,private router:Router){
  userService.getData().subscribe((data: any)=>{
    this.user=data;
  })
}
DeleteData(id:any){
  alert("Data is Deleted!")
  this.userService.deleteData(id).subscribe((data: any)=>{
    this.userService.getData().subscribe((data:any)=>{
      this.user=data;

    })
  })
}
// edit(user:any){
//   this.data.getid(user);
//   console.log(user)
// }
edit(id:any){
  
   this.router.navigate(['/edit',id]);
}

}
