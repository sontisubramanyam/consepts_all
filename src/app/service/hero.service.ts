import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EmployeeDetails } from '../model_classes/employeeDetails';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  saveObject(object, objectBody): Observable<any> {
    const body = JSON.stringify(objectBody);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), observe: 'response' as 'body'
    };
    return this.http
      .post(environment.serverUrl + object, body, httpOptions)
      .pipe(catchError(this.handleError));
  }


  getObject(object): Observable<any> {
    return this.http
      .get(environment.serverUrl + object)
      .pipe(catchError(this.handleError));
  }


  editObject(object, objectBody): Observable<any> {
    const body = JSON.stringify(objectBody);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), observe: 'response' as 'body'
    };
    return this.http
      .put(environment.serverUrl + object, body, httpOptions)
      .pipe(catchError(this.handleError));
  }


  editSaveDetails(id, employeeDetails): Observable<any> {
    let body = JSON.stringify(employeeDetails);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<any>(`http://localhost:3000/posts/${id}`, body, httpOptions)
  }


  deleteEmployee(object, id): Observable<any> {
    return this.http
      .delete(environment.serverUrl + object + '/' + `${id}`)
      .pipe(catchError(this.handleError));
  }


  //handle error
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error as any;
      errMsg = body.description ? body.description : body.errorMessage;
    } else {
      const body = error as any;
      if (body.error) {
        errMsg = body.error.errorMessage;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
    }
    return throwError(errMsg);
  }

}


