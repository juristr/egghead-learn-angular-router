import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { PersonDetailComponent } from './person-detail.component';

@Injectable()
export class CanDeactivateDirtyComponent
  implements CanDeactivate<PersonDetailComponent> {
  canDeactivate(
    component: PersonDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    const isDirty = component.isDirty;

    if (isDirty) {
      return confirm('You have unsaved changes, do you want to proceed?');
    } else {
      return true;
    }
  }
}
