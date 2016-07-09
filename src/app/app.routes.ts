import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { RoomComponent } from './room';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'room', component: RoomComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
