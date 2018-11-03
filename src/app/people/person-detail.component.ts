import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PeopleService } from './people.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-detail',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
      <input type="name" formControlName="name" />

      <button>Save</button>
    </form>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit {
  person;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params =>
          this.peopleService.getPersonById(+params['personId'])
        )
      )
      .subscribe(person => {
        this.person = person;
        this.form.patchValue(person);
      });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      value.id = this.person.id;
      this.peopleService.save(value);
    }
  }
}
