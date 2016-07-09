class Config {
  config: any;
  constructor() {
    this.config = require('../../config/config.json');
  }
  get() {
    return this.config;
  }
}

// Export as singleton
let config = new Config();
config = config.get();

export { config };
