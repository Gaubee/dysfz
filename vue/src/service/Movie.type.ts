export class MovieListItemData {
    constructor(public title: string, public id: string, public star: number) { }
    static from(data: any) {
        return new MovieListItemData(data.id, data.title, data.star);
    }
}