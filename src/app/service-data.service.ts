import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private dburl="http://localhost:3000/add-emp";
  constructor(private http:HttpClient,private httpclient:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization, X-Request-With",
      "preflightContinue": "false"
    })
  }

  getData(){
    return this.http.get(this.dburl)
  }

  deleteData (bookid:any):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.dburl+"/"+bookid);
  }
  
  getStudent(data:any):Observable<any>{
    return this.http.get(this.dburl,data);
  }
 
  getDetail(id:any){
    //const url ='${this.dburl}/${id}
    return this.http.get('http://localhost:3000/add-emp/'+id)
  }
  update(id:any,data:any){
    return this.http.put('http://localhost:3000/add-emp/'+id,data);
  }
  getlogindetail(data:any){
    return this.httpclient.get("http://localhost:8080/api/getLoginCre/login?mail="+data.mail+"&Password="+data.Password,this.httpOptions)
  } 
  PostRegister(data:any){
    return this.httpclient.get("http://localhost:8080/api/getLoginCre/login?mail="+data.mail+"&Password="+data.Password,this.httpOptions)
  }

}
