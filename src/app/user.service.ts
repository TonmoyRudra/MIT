import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Jsonp } from '@angular/http';
import { Observable, throwError, observable, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private getAllApplicantURL = 'http://139.59.13.79:5007/api/Application/getAllByApplicantId?applicantId=30';
  private getAllApplicantURL = 'http://139.59.13.79:5007/api/Application/getAll';

  constructor(private http: Http) { }

  getAllApplicant() {
    let applicantList;
    console.log("<========Get CompanyInfo by company_id Service Called========>")

    let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get(this.getAllApplicantURL, options)
      .pipe(
        map(applicantInfo => {
          applicantList = applicantInfo.json();
          console.log(applicantList);
          return  applicantList;
        }),
        catchError((error: Response) => {
          console.log("getCompanyInfoById error: " + error)
          return throwError(error);
        })
      )
  }
}
