import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import{MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegComponent } from './reg/reg.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
 
 

 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
     LoginComponent,
    NavComponent,
    HomeComponent,
    RegComponent,
    EditComponent,
   
 
     
    
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,MatIconModule, NgbModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
