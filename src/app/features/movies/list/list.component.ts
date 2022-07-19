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
    load = true;
    countPaginator: any = {
        start: 0,
        end: 5,
        page: 1
    };

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.getGenreList();
        this.getMovies();
    }

    getMovies(): void {
        this.appService.getList('movie/now_playing')
            .subscribe((response: any) => {
                this.movies = response;
                this.load = false;
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

    search(event: Event): void {
        if (event) {
            this.changePage(1);
            this.movies = event;
        } else {
            this.load = true;
            this.changePage(1);
            this.getMovies();
        }
    }

    isLoading(event: Event | any): void {
        this.load = (event) ? true : false;
    }

    changePage(event: any): void {
        this.countPaginator.page = event;
        this.countPaginator.start = (this.countPaginator.page === 1) ? 0 : (5 * this.countPaginator.page) - 5;
        this.countPaginator.end = (this.countPaginator.page === 1) ? 5 : (5 * this.countPaginator.page);

        const element: HTMLElement | any = document.querySelector('#home');
        (element as HTMLElement).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

    }

}
