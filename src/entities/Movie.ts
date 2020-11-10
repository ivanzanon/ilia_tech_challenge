import { Translation } from './Translation';

export class Movie {
    private id:string;

    public name:string;

    public director:string;

    public translation:Translation[];

    constructor(props: {id:string, name:string, director:string, translation:Translation[]}) {
      Object.assign(this, props);
    }
}
