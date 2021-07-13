import { Component, OnInit } from '@angular/core';

import Message from '../model/msg.model';

@Component({
  selector: 'app-targil1',
  templateUrl: './targil1.component.html',
  styleUrls: ['./targil1.component.css'],
})
export class Targil1Component implements OnInit {
  data: Array<Message>;
  constructor() {
    this.data = [
      { text: 't1', checked: false },
      { text: 't2', checked: false },
      { text: 't3', checked: false },
      { text: 't4', checked: false },
    ];
  }

  ngOnInit(): void {}

  f1(): void {
    this.data = this.data.map((item) => {
      return { text: item.text + 'g', checked: false };
    });
  }
}
