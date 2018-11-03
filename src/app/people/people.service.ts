import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PeopleService {
  private people = [
    {
      id: 1,
      name: 'Juri'
    },
    {
      id: 2,
      name: 'Steffi'
    },
    {
      id: 3,
      name: 'Thomas'
    }
  ];

  constructor() {}

  getPersonById(id: number): Observable<any> {
    return of(this.people).pipe(
      map(people => people.filter(x => x.id === id)[0])
    );
  }
}
