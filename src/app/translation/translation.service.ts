import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable()
export class TranslationService {
  languages: any;
  activeLanguage: string;
  config: any;
  constructor() {
    this.initializeLanguages();
  }

  initializeLanguages() {

    // @TODO fix this, Not sure why it comes double wrapped
    this.config = config.config;

    // Initialize language array
    this.languages = [];

    this.config.language.available.forEach(function(fileName) {
      this.languages[fileName] = require('../config/languages/' + fileName + '.json');
    }.bind(this));

    this.setLanguage(this.config.language.default);
  }
  get(key: string): string {
    return <string>this.languages[this.activeLanguage][key];
  }

  setLanguage(key: string) {
    this.activeLanguage = key;
  }
}
