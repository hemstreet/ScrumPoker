class Config {
  config: any;
  constructor() {
    let config = require('./config.json');
    let eventConfig = require('../../../config/config');
    Object.assign(config, eventConfig);
    this.config = config;
  }
  get() {
    return this.config;
  }
}

// Export as singleton
let config = new Config();
config = config.get();

export { config };
