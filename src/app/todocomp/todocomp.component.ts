 import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';

@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.css']
})
export class TodocompComponent implements OnInit {
  todoArray?: todo[];
  constructor() {
    this.todoArray = [
      {
        sno:1,
        title:"TODO-1",
        desc: "Description-1",
        active: true
      },
      {
        sno:1,
        title:"TODO-2",
        desc: "Description-2",
        active: true
      },
      {
        sno:3,
        title:"TODO-3",
        desc: "Description-3",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

}
