import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    movie: any = null;
    load = true;
    endpointImage: string = environment.ENDPOINT_IMAGE;

    constructor(private appService: AppService,
                private activatedRoute: ActivatedRoute,
                private sanitize: DomSanitizer) {
    }

    ngOnInit(): void {
        this.appService.getById(this.activatedRoute.snapshot.params.id)
            .subscribe((response: any) => {
                this.movie = response;
                if (this.movie.videos) {
                    this.movie.videos = this.movie.videos.results.shift();
                    const url = `https://www.youtube.com/embed/${this.movie.videos.key}`;
                    this.movie.videos.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(url);
                }
                this.load = false;
            });
    }

// {
//     var hours = Math.floor(num / 60);
//     var minutes = num % 60;
//     return hours + ":" + minutes;
// }

}
