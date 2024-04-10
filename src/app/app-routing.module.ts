import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
{path:'',
component:HomeComponent},

{path:'regi',
component:RegisterComponent},

{path:'login',
component:LoginComponent},
{
  path:'reg',
  component:RegComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'edit',
  component:EditComponent
},
{
  path:'edit/:id',
  component:EditComponent
}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
