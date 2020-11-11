export class Translation {
    public id: string;

    public name: string;

    public englishName: string;

    public overview: string;

    public title: string;

    constructor(props : {
      id: string,
      name: string,
      englishName: string,
      overview: string,
      title: string }) {
      Object.assign(this, props);
    }
}
