import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCusdir]',
})
export class CusdirDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() defaultFontColor: string = 'black';
  @Input('appCusdir') highLightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef) {
    console.log('elRef', elRef);
    this.backgroundColor = '';
    this.color = '';
  }

  ngOnInit(): void {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.defaultColor = `rgb(${r}, ${g}, ${b})`;
    this.backgroundColor = this.defaultColor;
    // this.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    this.color = this.defaultFontColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highLightColor || 'red';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.color = this.defaultFontColor;
  }
}
