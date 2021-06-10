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
  superdupercounters: SuperDuperCounter[] = [];
  
  name: string = 'Counter Wall';

  constructor() { }

  create(): void {

    if(this.counters.length === 5) {
      let sum: number = 0;

      for(let i in this.counters){
        sum += this.counters[i].value;
      }

      // empty normal counter array 
      this.counters = [];
      const supercounter: SuperCounter = new SuperCounter();
      supercounter.value = sum;
      this.supercounters.push(supercounter);
      
    } else {
      const counter: Counter = new Counter();
      this.counters.push(counter);

    }
  }

  ngOnInit(): void {
  }

}
