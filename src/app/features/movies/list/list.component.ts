import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    movies: any = null;
    endpointImage: string = environment.ENDPOINT_IMAGE;
    countPaginator: any = {
        start: 0,
        end: 5,
        page: 1
    };

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.getGenreList();
        this.appService.getList('movie/now_playing')
            .subscribe((response: any) => {
                this.movies = response;
            });
    }

    getGenreList(): void {
        this.appService.getList('genre/movie/list')
            .subscribe((response: any) => {
                const objGenre = {};
                for (const genre of response.genres) {
                    objGenre[genre.id] = genre.name;
                }
                this.appService.updateDataGenre(objGenre);
            });
    }

    changePage(event: any): void {
        this.countPaginator.page = event;
        this.countPaginator.start = (this.countPaginator.page === 1) ? 0 : this.countPaginator.page * 5;
        this.countPaginator.end = (this.countPaginator.page === 1) ? 5 : (this.countPaginator.page + 1) * 5;
    }

}
