import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  @Input() arr: any;
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    setTimeout(() => {
      this.onAdd.emit('test from comp1');
    }, 1000);
  }
  ff1() {
    console.log('emited');
    this.onAdd.emit('test from comp1');
    console.log(this.arr);
  }
}
