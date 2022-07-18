import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';

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
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.appService.getById(this.activatedRoute.snapshot.params.id)
            .subscribe((response: any) => {
                this.movie = response;
                console.dir(this.movie);
                this.load = false;
            });
    }

// {
//     var hours = Math.floor(num / 60);
//     var minutes = num % 60;
//     return hours + ":" + minutes;
// }

}
