import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get('http://localhost:3000/api/').pipe(
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
}
