import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { RoomComponent } from './room';
import { LoginComponent, SignUpComponent } from './user';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'room/:id', component: RoomComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
