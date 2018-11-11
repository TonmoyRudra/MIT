import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Jsonp } from '@angular/http';
import { Observable, throwError, observable, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'du-mit-app';


}
