import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonDetailComponent } from './person-detail.component';
import { PeopleListComponent } from './people-list.component';
import { CanDeactivateDirtyComponent } from './can-deactivate.guard';

const routes = [
  {
    path: '',
    component: PeopleListComponent,
    children: [
      {
        path: ':personId',
        component: PersonDetailComponent,
        canDeactivate: [CanDeactivateDirtyComponent]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
