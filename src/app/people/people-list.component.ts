import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  template: `
    <h3>People</h3>
    <ul>
      <li *ngFor="let person of people | async">
        <a [routerLink]="[person.id]">{{ person.name }}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit {
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }
}
