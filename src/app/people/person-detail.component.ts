import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-person-detail',
  template: `
    <pre>{{ person | json }}</pre>
    <div *ngIf="shouldShowChildren">
      We should also load the children.
    </div>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  person;
  shouldShowChildren = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
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
        this.person = person;
      });
  }
  ngOnDestroy(): void {
    console.log('people detail destroyed');
  }
}
