import { PersonDetailComponent } from './person-detail.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonDataResolver } from './person-resolver.service';

const routes = [
  {
    path: 'people/:personId',
    component: PersonDetailComponent,
    resolve: {
      person: PersonDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
