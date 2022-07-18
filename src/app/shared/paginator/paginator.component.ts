import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-paginator',
    template: `
        <ul class="paginator">
            <ng-template #listPaginator [ngTemplateOutlet]="listPaginator"
                         *ngFor="let n of [].constructor(pages); let i = index;">
                <li class="paginator__item"
                    (click)="selectedPage(i+1)"
                    [ngClass]="{'paginator__item--active': count === i+1}">
                    <span>{{i + 1}}</span>
                </li>
            </ng-template>
        </ul>
    `,
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

    @Output() eventChangePages = new EventEmitter();
    @Input() lenght: number;
    pages;
    count = 1;

    constructor() {
    }

    ngOnInit(): void {
        this.pages = Math.round((this.lenght / 5)) - 1;
    }

    selectedPage(n: number): void {
        this.count = Number(n);
        this.eventChangePages.emit(this.count);
    }

}
