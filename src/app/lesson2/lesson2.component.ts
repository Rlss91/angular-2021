import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css'],
})
export class Lesson2Component implements OnInit, OnChanges {
  selected: boolean;
  constructor(public myserviceService: MyserviceService) {
    this.selected = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
