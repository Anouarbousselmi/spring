import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { catchError, map, tap, timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private booleanValue=new Subject<boolean>();
  booleanimport=this.booleanValue.asObservable();
  private  apiUrl = 'http://localhost:8082/api/v1/users';
  private  apiUrl1 = 'http://localhost:8082/api/v1/posts';
  constructor(private http:HttpClient) { }

  signup(user:User):Observable<User[]>{
    return this.http.post<any>(`${this.apiUrl}`,user);
  }

  toggleSidebar(val :boolean ) {
    val=!val;
    this.booleanValue.next(val);
    return  val;

    }


    login(user:User):Observable<User[]> {
      const lognUrel=`${this.apiUrl}`
      return this.http.get<getResponseUser>( lognUrel).pipe(
        map(response=>response._embedded.users),
       /*  tap(user => {
           if (user ) {
             localStorage.setItem('user', JSON.stringify(user));
           }

         }),
        // catchError(this.handleError('', []))*/
       );


     }
     addpost(post:Post,id:number):Observable<User[]>{
      return this.http.post<any>(`${this.apiUrl1}`+'/'+`${id}`,post);
    }


}
interface getResponseUser{
  _embedded:{
    users:User[];
  }

}
