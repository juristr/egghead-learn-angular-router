import { PersonDetailComponent } from './person-detail.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: 'people/:personId',
    component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
