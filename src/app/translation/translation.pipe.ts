import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './';

@Pipe({
  name: 'translate'
})

export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {
  }
  transform(key: string, domain: string): any {
    return this.translationService.get(key, domain);
  }
}
