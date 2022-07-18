import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, finalize, map, repeat, switchMap, tap} from 'rxjs/operators';
import {AppService} from '../../services/app.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchForm: FormGroup;
    @Output() eventSearchResult = new EventEmitter();
    @Output() load = new EventEmitter();

    constructor(private formBuilder: FormBuilder,
                private appService: AppService) {
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            query: null,
        });

        this.searchForm
            .get('query')
            .valueChanges
            .pipe(
                debounceTime(300),
                tap(() => this.load.emit(true)),
                map(value => {
                    if (value) {
                        this.appService.search('search/movie', value.toLowerCase())
                            .pipe(
                                finalize(() => this.load.emit(false))
                            )
                            .subscribe((response: any) => {
                                this.eventSearchResult.emit(response);
                                return response;
                            }, (err) => {
                                this.eventSearchResult.emit(null);
                            });
                    } else {
                        this.eventSearchResult.emit(null);
                    }
                })
            ).subscribe();
    }

}
