import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-person-detail',
  template: `
    <div style="padding-top: 15px;">
      <label>Id: {{ person.id }}</label>
    </div>
    <div>
      <label>Name:</label>
      <input type="text" #nameInput [value]="person.name">
    </div>
    <button (click)="onSave(nameInput.value)">Save</button>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person;
  shouldShowChildren = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.shouldShowChildren = queryParams.get('showChilds') === 'true';
    });

    this.activatedRoute.params
      .pipe(
        switchMap(params =>
          this.peopleService.getPersonById(+params['personId'])
        )
      )
      .subscribe(person => {
        this.person = Object.assign({}, person);
      });
  }

  onSave(personName) {
    this.person.name = personName;
    this.peopleService.save(this.person).subscribe(() => {
      // redirect back people list
      this.router.navigate(['../'], {
        relativeTo: this.activatedRoute,
        preserveQueryParams: true
      });
    });
  }
}
