import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css'],
})
export class Lesson3Component implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getApi().subscribe(
      (data) => {
        console.log(data);
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
}
