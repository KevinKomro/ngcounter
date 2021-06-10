import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponentComponent } from './counter-detail-component/counter-detail-component.component';
import { SuperCounterDetailComponentComponent } from './super-counter-detail-component/super-counter-detail-component.component';
import { SuperDuperCounterDetailCompnonentComponent } from './super-duper-counter-detail-component/super-duper-counter-detail-compnonent.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponentComponent,
    SuperCounterDetailComponentComponent,
    SuperDuperCounterDetailCompnonentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
