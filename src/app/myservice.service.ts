import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  n: number;
  ninterval: any;
  constructor() {
    this.n = 0;
    this.ninterval = new Observable((obs) => {
      let intervali = setInterval(() => {
        this.n++;
        obs.next(this.n);
      }, 1000);
      return {
        unsubscribe() {
          clearInterval(intervali);
        },
      };
    });
  }
  incN(): void {
    this.n++;
    console.log(this.n);
  }
  getN(): string {
    return this.n + '';
  }
  getNInterval() {
    return this.ninterval;
  }
}
