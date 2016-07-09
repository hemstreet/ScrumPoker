import { Injectable } from '@angular/core';
const config = require('../../config/config.json');

@Injectable()
export class TranslationService {
  languages: any;
  activeLanguage: string;
  constructor() {
    this.initializeLanguages();
  }
  initializeLanguages() {

    // Initialize language array
    this.languages = [];

    config.language.available.forEach(function(fileName) {

      this.languages[fileName] = require('./languages/' + fileName + '.json');
    }.bind(this));

    this.activeLanguage = config.language.default;
  }
  translate() {

  }
}
