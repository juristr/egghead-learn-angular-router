import { PeopleRoutingModule } from './people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail.component';
import { PeopleService } from './people.service';
import { PersonDataResolver } from './person-resolver.service';

@NgModule({
  imports: [CommonModule, PeopleRoutingModule],
  providers: [PeopleService, PersonDataResolver],
  declarations: [PersonDetailComponent]
})
export class PeopleModule {}
