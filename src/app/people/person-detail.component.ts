import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail',
  template: `
    <p>
      person-detail works!
    </p>
    <pre>{{ person | json }}</pre>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params =>
          this.peopleService.getPersonById(+params['personId'])
        )
      )
      .subscribe(person => {
        this.person = person;
      });

    // this.activatedRoute.params.subscribe(params => {
    //   const personid = params['personId'];
    //   this.peopleService.getPersonById(+personid).subscribe(person => {
    //     this.person = person;
    //   });
    // });
  }
}
