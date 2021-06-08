import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: Counter[] = [];
  name: string = 'Counter Wall';

  constructor() { }

  create(): void {

    const counter: Counter = new Counter();
    this.counters.push(counter);

  }

  ngOnInit(): void {
  }

}