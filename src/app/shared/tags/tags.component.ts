import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
    selector: 'app-tags',
    template: `
        <ul class="tags">
            <ng-template #listTags [ngTemplateOutlet]="listTags"
                *ngFor="let tag of tags">
                <li class="tags__item" *ngIf="!flag">{{tagsData[tag]}}</li>
                <li class="tags__item" *ngIf="flag">{{ tag.name }}</li>
            </ng-template>
        </ul>
    `,
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    @Input() tags: any[];
    @Input() flag: any | boolean;
    tagsData;

    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.appService.currentGenreShared
            .subscribe((data: any) => {
                this.tagsData = data;
            });
    }
}
