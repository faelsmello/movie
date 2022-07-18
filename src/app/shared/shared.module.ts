import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoadComponent } from './load/load.component';


@NgModule({
    declarations: [SearchComponent, TagsComponent, PaginatorComponent, LoadComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SearchComponent,
        TagsComponent,
        PaginatorComponent,
        LoadComponent
    ]
})
export class SharedModule {
}
