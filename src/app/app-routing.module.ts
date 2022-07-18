import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';

const routes: Routes = [
    {
        path: 'app', component: HomeComponent, children: [
            {path: '', loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)}
        ]
    },
    {
        path: '**',
        redirectTo: 'app'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
