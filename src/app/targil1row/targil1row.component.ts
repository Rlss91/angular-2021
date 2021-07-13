import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChanges,
} from '@angular/core';

import Message from '../model/msg.model';

@Component({
  selector: 'app-targil1row',
  templateUrl: './targil1row.component.html',
  styleUrls: ['./targil1row.component.css'],
})
export class Targil1rowComponent implements OnInit {
  @Input() row: Message;
  selected: boolean;
  constructor() {
    this.row = {} as Message;
    this.selected = false;
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', 'changes', changes);
  // }

  ngOnInit(): void {}
}
