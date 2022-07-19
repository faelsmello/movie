import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

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
        obj = obj.append('append_to_response', 'videos');

        return this.http.get(`${environment.ENDPOINT}/movie/${id}`, {
                params: obj,
            }
        );
    }

    search(url, filter: any): Observable<object> {
        let obj = new HttpParams();
        obj = obj.append('query', filter);
        obj = obj.append('api_key', '8c7b911c7d628288f8e3e7663c8da761');
        obj = obj.append('language', 'pt-BR');

        return this.http.get(`${environment.ENDPOINT}/${url}`, {params: obj})
            .pipe(
                tap((response: any) => {
                    return response;
                })
            );
    }


    updateDataGenre(value: any): void {
        this.sharedGenre.next(value);
    }


}
