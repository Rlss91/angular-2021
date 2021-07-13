import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  n: number;
  constructor() {
    this.n = 0;
  }
  incN(): void {
    this.n++;
    console.log(this.n);
  }
  getN(): string {
    return this.n + '';
  }
}
