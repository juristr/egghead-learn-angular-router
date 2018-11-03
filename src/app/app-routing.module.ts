import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NotfoundComponent } from './notfound.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { CustomRoutePreloader } from './custom-route-preloader';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'people',
    loadChildren: './people/people.module#PeopleModule'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomRoutePreloader
    })
  ],
  providers: [CustomRoutePreloader],
  exports: [RouterModule]
})
export class AppRoutingModule {}
