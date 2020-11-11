import { Translation } from './Translation';

export class Movie {
    private id:string;

    public originalId: number;

    public title:string;

    public overview:string;

    public translation:Translation[];

    constructor(props: {id:string, originalId:string, title:string, overview:string}) {
      Object.assign(this, props);
    }

    public getId(): string { return this.id; }
}
