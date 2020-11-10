export class Translation {
    public id: string;

    public name: string;

    public englishName: string;

    public overview: string;

    constructor(props : {id: string, name: string, englishName: string, overview: string, }) {
      Object.assign(this, props);
    }
}
