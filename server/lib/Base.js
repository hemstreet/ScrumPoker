module.exports = class Base {

  constructor() {}

  initializeListeners(eventNamespace) {
    let baseEvents = this.config.events[eventNamespace];

    Object.keys(baseEvents).forEach((key) => {
      this.socket.on(baseEvents[key], (data) => {
        this[baseEvents[key].split(':')[1]](data).then((data) => {
          this.socket.emit(baseEvents[key].replace('will', 'did'), data);
        });
      });
    });
  }
}
