export class Translation {
    public id: string;

    public name: string;

    public englishName: string;

    public overview: string;

    public movie: string;

    constructor(props : {
      id: string,
      name: string,
      englishName: string,
      overview: string,
      movie: string }) {
      Object.assign(this, props);
    }
}
