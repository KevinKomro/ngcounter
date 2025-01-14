import { Component, Input, OnInit } from '@angular/core';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter-detail-component.component.html',
  styleUrls: ['./super-counter-detail-component.component.css']
})
export class SuperCounterDetailComponentComponent implements OnInit {

  @Input() counter: SuperCounter;

  constructor() { }

  Increment(): void {
    this.counter.value += 3;
  }

  Decrement(): void {
    if (this.counter.value >= 3) {
      this.counter.value -= 3;
    }
  }

  ngOnInit(): void {
  }

}
