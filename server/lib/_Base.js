module.exports = class Base {

  constructor() {}

  initializeListeners() {
    let roomEvents = this.config.events.room;

    Object.keys(roomEvents).forEach((key) => {
      let event = roomEvents[key];
      this.socket.on(event, (data) => {
        this[event.split(':')[1]](data).then((data) => {
          this.socket.emit(event.replace('will', 'did'), data);
        });
      });
    });
  }
}
