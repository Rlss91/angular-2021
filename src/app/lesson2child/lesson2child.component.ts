import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-lesson2child',
  templateUrl: './lesson2child.component.html',
  styleUrls: ['./lesson2child.component.css'],
})
export class Lesson2childComponent implements OnInit, OnDestroy {
  interval1: any;
  constructor(private myserviceService: MyserviceService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    // this.interval1 = setInterval(() => {
    //   console.log('interval');
    // }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // clearInterval(this.interval1);
  }

  f1() {
    this.myserviceService.incN();
  }
}
