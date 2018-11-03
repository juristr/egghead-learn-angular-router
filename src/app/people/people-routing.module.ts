import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonDetailComponent } from './person-detail.component';
import { PeopleListComponent } from './people-list.component';

const routes = [
  {
    path: 'people',
    component: PeopleListComponent,
    children: [
      {
        path: ':personId',
        component: PersonDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
