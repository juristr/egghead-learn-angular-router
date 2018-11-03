import { Component, OnInit, OnDestroy } from '@angular/core';
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
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }
  ngOnDestroy(): void {
    console.log('people list destroyed');
  }
}
