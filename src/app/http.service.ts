import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getApi() {
    let headers = new HttpHeaders({ token: 'abc' });
    let params = new HttpParams();
    params = params.append('a', 'a1');
    params = params.append('b', 'a2');
    return this.http
      .get('http://localhost:3000/api/', {
        headers,
        params,
      })
      .pipe(
        map((res: any) => {
          let arr: any = [];
          let i: number = 0;
          for (let item of res) {
            arr = [...arr, { ...item, id: i }];
            i++;
          }
          return arr;
        })
      );
  }
  postApi() {
    return this.http.post('http://localhost:3000/api/', {
      text: 'asd',
    });
  }
}
