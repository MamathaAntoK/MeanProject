import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './editform/editform.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  loginuser(user:any){
    return this.http.post<any>('http://localhost:3000/authlogin',user);
  }
  addemployee(user:any){
    return this.http.post<any>('http://localhost:3000/add',user)
  }
  getemployee(){
    return this.http.get<any>('http://localhost:3000/add')
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/add/${item._id}`, item);
  }



  deleteItem(itemId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/add/${itemId}`);
  }
}
