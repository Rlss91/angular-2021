import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css'],
})
export class Lesson3Component implements OnInit {
  dataArr: any;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getApi().subscribe(
      (data) => {
        console.log(data);
        this.dataArr = data;
      },
      (err) => {
        console.log('err', err);
      }
    );
    this.httpService.postApi().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  Upper(item: any): void {
    // console.log(item);
    item.text = item.text.toUpperCase();
  }
  Lower(item: any): void {
    item.text = item.text.toLowerCase();
  }
}
