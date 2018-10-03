import { AppFetch } from './AppFetch';
import { AppUrl } from './AppUrl';
import { MovieListItemData } from './Movie.type';
export { MovieListItemData };
export class MovieSearcher {
    constructor(private fetch = AppFetch.instance) {

    }
    readonly MOVIE_QUERY_URL = new AppUrl('/movie/query/:query_text');
    async search(query_text: string) {
        // await this.fetch.get(this.MOVIE_QUERY_URL, { params: { query_text } })
        return [
            MovieListItemData.from({
                id: query_text + "qaq",
                star: Math.random() * 10,
                title: query_text + "QAQ"
            }),
            MovieListItemData.from({
                id: query_text + "xxas",
                star: Math.random() * 10,
                title: query_text + "XXAS"
            }),
            MovieListItemData.from({
                id: query_text + "vdaopoasda",
                star: Math.random() * 10,
                title: query_text + "VDAOPOASDA"
            })
        ]
    }

    /// 默认实例
    private static _default_instance?: MovieSearcher
    static get instance() {
        return this._default_instance || (this._default_instance = new MovieSearcher());
    }
}