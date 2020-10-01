import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';

const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/add', component: MovieFormComponent },
    { path: 'movies/:id', component: MovieSingleComponent },
    { path: 'movies/edit/:id', component: MovieFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
