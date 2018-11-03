import { PeopleRoutingModule } from './people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail.component';

@NgModule({
  imports: [CommonModule, PeopleRoutingModule],
  declarations: [PersonDetailComponent]
})
export class PeopleModule {}
