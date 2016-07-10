import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { RoomComponent } from './room';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'room/:id', component: RoomComponent }
  // { path: '**', redirectTo: ['home'] } // Generic send home route to handle any sort of 404's
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
