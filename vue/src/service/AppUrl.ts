export class AppUrl {
    constructor(public url: string, public base_url: string = "") { }
    toString() {
        return this.url;
    }
}