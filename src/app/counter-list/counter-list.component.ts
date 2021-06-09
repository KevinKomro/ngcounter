import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: Counter[] = [];
  supercounters: SuperCounter[] = [];
  
  name: string = 'Counter Wall';

  constructor() { }

  create(): void {

    if(this.counters.length < 5) {
      const counter: Counter = new Counter();
      this.counters.push(counter);
    } else {
      const supercounter: SuperCounter = new SuperCounter();
      this.supercounters.push(supercounter);
      
      // empty normal counter array 
      this.counters = [];

    }
    

  }

  ngOnInit(): void {
  }

}
