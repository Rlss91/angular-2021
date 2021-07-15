import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  n: number;
  txt: string;
  dis: boolean;
  arr: any;
  now: Date;

  //arr: Array<modelDugma>;

  constructor(private http: HttpService) {
    this.title = 'Test';
    this.n = 1 + 1 + 2;
    this.txt = 'asd';
    this.dis = false;
    this.arr = [
      { val: 1 },
      { val: 1 },
      { val: 1 },
      { val: 1 },
      { val: 1 },
      { val: 1 },
    ];
    this.now = new Date();
  }
  ngOnInit(): void {
    this.http.getToken().subscribe((data: any) => {
      console.log('token', data);
      localStorage.setItem('token', data.token);
    });
  }
  f1() {
    this.txt = 'ddd';
  }
  setUppercaseName(e: any) {
    this.dis = e.length % 2 == 0;
    console.log(e);
  }

  reciveDataFromComp1(e: any) {
    this.txt = e;
    console.log(e);
  }
}
