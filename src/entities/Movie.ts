import { Translation } from './Translation';

export class Movie {
    private id:string;

    public title:string;

    public overview:string;

    public translation:Translation[];

    constructor(props: {id:string, title:string, overview:string}) {
      Object.assign(this, props);
    }
}
