import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Targil1Component } from './targil1/targil1.component';
import { Targil1rowComponent } from './targil1row/targil1row.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson2childComponent } from './lesson2child/lesson2child.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, Targil1Component, Targil1rowComponent, Lesson2Component, Lesson2childComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
