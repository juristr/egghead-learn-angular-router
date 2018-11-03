import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  template: `
    <h3>People</h3>
    <ul>
      <li *ngFor="let person of people | async">
        <a [routerLink]="[person.id]" [queryParams]="activatedRoute.queryParams | async">{{ person.name }}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit {
  people;

  constructor(
    private peopleService: PeopleService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }
}
