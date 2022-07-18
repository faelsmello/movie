import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'movie';

    constructor(private app: AppService) {
    }

    ngOnInit(): void {
        // this.app.getList()
        //     .subscribe((response: any) => {
        //         console.log(response);
        //     });
    }
}
