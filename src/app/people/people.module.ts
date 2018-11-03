import { PeopleRoutingModule } from './people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PeopleRoutingModule],
  declarations: [PersonDetailComponent, PeopleListComponent],
  providers: [PeopleService]
})
export class PeopleModule {}
