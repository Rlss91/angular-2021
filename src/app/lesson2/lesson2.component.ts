import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
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
    const locations = new Observable((observer: any) => {
      let watchId: number;

      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position: any) => {
            observer.next(position);
          },
          (error: any) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Ge.. not available');
      }
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        },
      };
    });
    const locationsSubscription = locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error : ', msg);
      },
    });
    setTimeout(() => {
      locationsSubscription.unsubscribe();
    }, 10000);
  }
}
