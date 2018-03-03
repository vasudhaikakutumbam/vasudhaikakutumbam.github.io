import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Need } from './need';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class NeedsService {
  private needsUrl = 'api/needs';  // URL to web api

  constructor(private http: HttpClient) { 
  }

  getNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(this.needsUrl)
    .pipe(
      tap(needs => console.log(`Fetched Beneficiary Needs`)),
      catchError(this.handleError('getNeeds', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
