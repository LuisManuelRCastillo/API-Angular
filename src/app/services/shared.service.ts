import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44304/api";

  constructor(private http:HttpClient) { }

  //DEPARTMENT

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val)
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val)
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val)
  }
  //CATEGORY

  getCatList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+"/Category");
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl+"/Category",val)
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+"/Category",val)
  }
  deletedCategory(val:any){
    return this.http.delete(this.APIUrl+"/Category/"+val)
  }
}
