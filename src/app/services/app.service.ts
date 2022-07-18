import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {
    }

    private sharedGenre = new BehaviorSubject(null);
    currentGenreShared = this.sharedGenre.asObservable();

    getList(url: string): Observable<object> {
        let obj = new HttpParams();

        obj = obj.append('api_key', '8c7b911c7d628288f8e3e7663c8da761');
        obj = obj.append('language', 'pt-BR');

        return this.http.get(`${environment.ENDPOINT}/${url}`, {
                params: obj,
            }
        );
    }

    getById(id: number): Observable<object> {
        let obj = new HttpParams();

        obj = obj.append('api_key', '8c7b911c7d628288f8e3e7663c8da761');
        obj = obj.append('language', 'pt-BR');

        return this.http.get(`${environment.ENDPOINT}/movie/${id}`, {
                params: obj,
            }
        );
    }

    updateDataGenre(value: any): void {
        this.sharedGenre.next(value);
    }


}
