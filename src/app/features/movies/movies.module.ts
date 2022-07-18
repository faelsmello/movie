import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [ListComponent, DetailComponent],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        SharedModule
    ]
})
export class MoviesModule {
}
