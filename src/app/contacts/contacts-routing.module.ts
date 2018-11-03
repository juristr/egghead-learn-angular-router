import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';

const routes = [
  {
    path: 'list',
    component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
