import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Targil1Component } from './targil1/targil1.component';
import { Targil1rowComponent } from './targil1row/targil1row.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson2childComponent } from './lesson2child/lesson2child.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ApiInterceptorService } from './api-interceptor.service';
import { Lesson4Component } from './lesson4/lesson4.component';
import { CusdirDirective } from './cusdir.directive';
import { UpperriversPipe } from './upperrivers.pipe';
import { SlicepipePipe } from './slicepipe.pipe';
import { ReplacepipePipe } from './replacepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Targil1Component,
    Targil1rowComponent,
    Lesson2Component,
    Lesson2childComponent,
    Lesson3Component,
    Lesson4Component,
    CusdirDirective,
    UpperriversPipe,
    SlicepipePipe,
    ReplacepipePipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
