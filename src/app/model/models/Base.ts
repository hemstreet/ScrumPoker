export class Base {
  constructor(data: any) {
    let fields = Object.keys(data);
    fields.forEach((field) => {
      this.set(field, data[field]);
    });
  }

  get(field) {
    return this[field];
  }

  set(field, value) {
    this[field] = value;
  }
}
