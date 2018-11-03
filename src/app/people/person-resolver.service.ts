import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { PeopleService } from './people.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonDataResolver implements Resolve<any> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.peopleService.getPersonById(+route.params['personId']);
  }
}
