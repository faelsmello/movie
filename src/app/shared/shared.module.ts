import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
    declarations: [SearchComponent, TagsComponent, PaginatorComponent],
    imports: [
        CommonModule
    ],
    exports: [
        SearchComponent,
        TagsComponent,
        PaginatorComponent
    ]
})
export class SharedModule {
}
