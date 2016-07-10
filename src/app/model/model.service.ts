/*

  THIS IS NOT IMPLEMENTED YET

  @TODO Implement this service to take the heavy lifting of translations and other common model interactions
 */
import { Injectable } from '@angular/core';
import { TranslationService } from '../translation';

@Injectable()
export class ModelService {
  constructor(
    private translationService: TranslationService) {
  };
  populateViewModel(model, keys) {
    let promise = new Promise((resolve) => {
      let length = Object.keys(keys).length - 1;

      Object.keys(keys).forEach(function(key, index) {
        model = this.translationService.get(<string>key);

        if (length === index) {
          resolve(model);
        }
      });

    });

    return promise;
  }
}
