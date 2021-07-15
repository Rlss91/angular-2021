import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css'],
})
export class Lesson4Component implements OnInit {
  longTask = new Promise((ok, not) => {
    setTimeout(() => {
      ok('ok');
    }, 2000);
  });

  constructor() {}

  ngOnInit(): void {}
}
