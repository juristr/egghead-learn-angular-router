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

  getAll() {
    return of(this.people);
  }

  getPersonById(id: number): Observable<any> {
    return of(this.people).pipe(
      map(people => people.filter(x => x.id === id)[0])
    );
  }

  save(value: any): any {
    if (value.id) {
      const currentPerson = this.people.find(x => x.id === value.id);
      if (currentPerson) {
        currentPerson.name = value.name;
      }
    } else {
      const newPerson = {
        ...value,
        id: Math.floor(Math.random() * 100)
      };
      this.people.push(newPerson);
    }
  }
}
