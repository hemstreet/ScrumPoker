import { enableProdMode, PLATFORM_PIPES, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { TranslationPipe } from './app/translation';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    provide(PLATFORM_PIPES, {
      useValue: [TranslationPipe],
      multi: true
    }),
    { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/ routes, remove this for HTML5 mode

  ])
  .catch(err => console.error(err));
