import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail',
  template: `
    <pre>{{ person | json }}</pre>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person;

  constructor(
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.person = data['person'];
    });
    // this.activeRoute.params
    //   .pipe(
    //     switchMap(params =>
    //       this.peopleService.getPersonById(+params['personId'])
    //     )
    //   )
    //   .subscribe(person => {
    //     this.person = person;
    //   });
  }
}
