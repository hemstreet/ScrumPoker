[Index](../README.md)

Translations
============

Translations can be used in performed in two different ways. We can use either pipes, or using
the translations service directly.

Basic translation structure is as follows:
```
{
  "common": {
    "title" : "Scrum Poker"
  }
}
```

Pipes:
`{{ 'title' | translate: 'common' }}`

*Translation service* :

```
import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation';

import { AppViewModel } from './app.component.viewmodel';

@Component({
  selector: 'appComponent',
  providers: [
    TranslationService
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  model: AppViewModel;
  constructor(
    private translationService: TranslationService) {
  };

  ngOnInit() {
    this.model = new AppViewModel();
    this.model.title = this.translationService.get('common.title');
  }
}

```
